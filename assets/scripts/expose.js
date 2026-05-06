// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('#expose button');
  const hornAudio = document.querySelector('#expose audio');
  const jsConfetti = new window.JSConfetti();

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);
    let iconLevel = 0;

    if (volumeValue >= 67) {
      iconLevel = 3;
    } else if (volumeValue >= 33) {
      iconLevel = 2;
    } else if (volumeValue > 0) {
      iconLevel = 1;
    }

    volumeIcon.src = `assets/icons/volume-level-${iconLevel}.svg`;
    volumeIcon.alt = `Volume level ${iconLevel}`;
    hornAudio.volume = volumeValue / 100;
  });

  playButton.addEventListener('click', () => {
    if (!hornAudio.src) {
      return;
    }

    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  hornAudio.volume = Number(volumeSlider.value) / 100;
}
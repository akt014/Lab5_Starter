// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const synth = window.speechSynthesis;
  const closedMouthSrc = 'assets/images/smiling.png';
  const openMouthSrc = 'assets/images/smiling-open.png';

  function populateVoiceOptions() {
    const voices = synth.getVoices();
    const selectedValue = voiceSelect.value;

    // Keep only the placeholder option before rebuilding the voice list.
    voiceSelect.innerHTML = '<option value="select" disabled>Select Voice:</option>';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    if (selectedValue && selectedValue !== 'select') {
      voiceSelect.value = selectedValue;
    } else if (voices.length > 0) {
      voiceSelect.selectedIndex = 1;
    } else {
      voiceSelect.selectedIndex = 0;
      voiceSelect.options[0].selected = true;
    }
  }

  populateVoiceOptions();
  synth.addEventListener('voiceschanged', populateVoiceOptions);

  talkButton.addEventListener('click', () => {
    const message = textToSpeak.value.trim();
    if (!message) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(message);
    const selectedVoice = synth.getVoices().find((voice) => voice.name === voiceSelect.value);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      faceImage.src = openMouthSrc;
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = closedMouthSrc;
      faceImage.alt = 'Smiling face';
    });

    utterance.addEventListener('error', () => {
      faceImage.src = closedMouthSrc;
      faceImage.alt = 'Smiling face';
    });

    synth.cancel();
    synth.speak(utterance);
  });
}
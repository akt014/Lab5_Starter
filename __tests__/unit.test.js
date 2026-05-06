// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('returns true for dashed phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('returns true for parenthesized phone number', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('returns false for non-numeric phone number', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });

  test('returns false for missing separators', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
});

describe('isEmail', () => {
  test('returns true for school email', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
  });

  test('returns true for alphanumeric username email', () => {
    expect(isEmail('abc123@school.org')).toBe(true);
  });

  test('returns false for email missing top-level domain', () => {
    expect(isEmail('student@ucsd')).toBe(false);
  });

  test('returns false for dotted username email', () => {
    expect(isEmail('student.email@ucsd.edu')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('returns true for minimum length valid password', () => {
    expect(isStrongPassword('A123')).toBe(true);
  });

  test('returns true for underscore valid password', () => {
    expect(isStrongPassword('pass_word9')).toBe(true);
  });

  test('returns false when password starts with a number', () => {
    expect(isStrongPassword('1abc')).toBe(false);
  });

  test('returns false for too short password', () => {
    expect(isStrongPassword('ab')).toBe(false);
  });
});

describe('isDate', () => {
  test('returns true for single digit month/day date', () => {
    expect(isDate('1/2/2026')).toBe(true);
  });

  test('returns true for two digit month/day date', () => {
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('returns false for year-first date format', () => {
    expect(isDate('2026/12/31')).toBe(false);
  });

  test('returns false for dash-separated date', () => {
    expect(isDate('12-31-2026')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('returns true for 3-digit hex color', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('returns true for 6-digit hex color without hash', () => {
    expect(isHexColor('1A2B3C')).toBe(true);
  });

  test('returns false for 2-digit hex color', () => {
    expect(isHexColor('#ff')).toBe(false);
  });

  test('returns false for non-hex character', () => {
    expect(isHexColor('#12345g')).toBe(false);
  });
});

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('accepts valid phone numbers', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('rejects invalid phone numbers', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
});

describe('isEmail', () => {
  test('accepts valid email addresses', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
    expect(isEmail('abc123@school.org')).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(isEmail('student@ucsd')).toBe(false);
    expect(isEmail('student.email@ucsd.edu')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('accepts valid strong passwords', () => {
    expect(isStrongPassword('A123')).toBe(true);
    expect(isStrongPassword('pass_word9')).toBe(true);
  });

  test('rejects invalid strong passwords', () => {
    expect(isStrongPassword('1abc')).toBe(false);
    expect(isStrongPassword('ab')).toBe(false);
    expect(isStrongPassword('abc$123')).toBe(false);
  });
});

describe('isDate', () => {
  test('accepts valid date format', () => {
    expect(isDate('1/2/2026')).toBe(true);
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('rejects invalid date format', () => {
    expect(isDate('2026/12/31')).toBe(false);
    expect(isDate('12-31-2026')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('accepts valid hex color values', () => {
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('1A2B3C')).toBe(true);
  });

  test('rejects invalid hex color values', () => {
    expect(isHexColor('#ff')).toBe(false);
    expect(isHexColor('#12345g')).toBe(false);
  });
});

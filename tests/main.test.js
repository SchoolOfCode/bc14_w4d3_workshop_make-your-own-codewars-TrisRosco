//👉 Write your tests below here:

const { test, expect } = require('@playwright/test');
import { convertToUnicode } from '../main.js';



test ('Should return "`Hi, Tristan! Nice to meet you!`"', () => {
    expect(convertToUnicode([84, 114, 105, 115, 116, 97, 110])).toBe('Hi, Tristan! Nice to meet you!');
    }

);

test ('Should return "`Hi, Becky! Nice to meet you!`"', () => {
    expect(convertToUnicode([66, 101, 99, 107, 121])).toBe('Hi, Becky! Nice to meet you!');
    }

);

test ('Should return "`Hi, John! Nice to meet you!`"', () => {
    expect(convertToUnicode([74, 111, 104, 110])).toBe('Hi, John! Nice to meet you!');
    }

);

test ('Should return "`Hi, Sophie! Nice to meet you!`"', () => {
    expect(convertToUnicode([83, 111, 112, 104, 105, 101])).toBe('Hi, Sophie! Nice to meet you!');
    }

);


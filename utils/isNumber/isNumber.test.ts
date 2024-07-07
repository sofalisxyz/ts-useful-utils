import { describe, expect, it } from 'vitest';

import { isNumber } from './isNumber';

const testCases = [
    { input: 12345, expected: true },
    { input: '12345', expected: true },
    { input: 'qwerty', expected: false },
    { input: 'qwerty12345', expected: false },
    { input: '', expected: false },
    { input: null, expected: false },
    { input: undefined, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
];

describe('isNumber()', () => {
    testCases.forEach(({ input, expected }) => {
        it(`returns if ${input} is number: ${expected}`, () => {
            const result = isNumber(input);
            expect(result).toBe(expected);
        });
    });
});

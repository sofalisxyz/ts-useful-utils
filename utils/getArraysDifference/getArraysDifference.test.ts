import { describe, expect, it } from 'vitest';
import { getArraysDifference } from './getArraysDifference';

const testCases = [
    { mainArray: [1, 2, 3, 4, 5], arrayToCompareWith: [1, 3, 5], expected: [2, 4] },
    { mainArray: [1, 2, 3, 4, 5], arrayToCompareWith: [1, 2, 3, 4, 5], expected: [] },
    { mainArray: [1, 2, 3], arrayToCompareWith: [1, 3, 5], expected: [2] },
    { mainArray: [], arrayToCompareWith: [], expected: [] },
    { mainArray: [1, 2, 3, 4, 5], arrayToCompareWith: [], expected: [1, 2, 3, 4, 5] },
    { mainArray: [], arrayToCompareWith: [1, 2, 3, 4, 5], expected: [] },
    {
        mainArray: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
        arrayToCompareWith: ['dolor', 'amet'],
        expected: ['lorem', 'ipsum', 'sit'],
    },
    { mainArray: [true], arrayToCompareWith: [], expected: [true] },
    { mainArray: [true], arrayToCompareWith: [false], expected: [true] },
    { mainArray: [true], arrayToCompareWith: [true], expected: [] },
    { mainArray: [true, true], arrayToCompareWith: [true], expected: [] },
    { mainArray: [true, false], arrayToCompareWith: [true], expected: [false] },
    { mainArray: [null], arrayToCompareWith: [], expected: [null] },
    { mainArray: [true, true, false], arrayToCompareWith: [true, false, false], expected: [] },
];

describe('getArraysDifference()', () => {
    testCases.forEach(({ mainArray, arrayToCompareWith, expected }) => {
        it(`returns difference between main array: ${JSON.stringify(
            mainArray,
        )} and comparable: ${JSON.stringify(arrayToCompareWith)} to be as: ${JSON.stringify(
            expected,
        )}`, () => {
            const result = getArraysDifference({ mainArray, arrayToCompareWith });
            expect(result).toStrictEqual(expected);
        });
    });
});

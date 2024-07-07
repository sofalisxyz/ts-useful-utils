import { describe, expect, it } from 'vitest';
import { getKeyByValue } from './getKeyByValue';

const testCases = [
    { input: { key: 'value' }, value: 'value', expected: 'key' },
    { input: { meow: 'murr' }, value: 'murr', expected: 'meow' },
    { input: { meow: 'murr' }, value: 'nyah', expected: undefined },
    {
        input: { key1: 'value1', key2: 'value2', key3: 'value3' },
        value: 'value2',
        expected: 'key2',
    },
    {
        input: { key1: 'value1', key2: 'value1', key3: 'value3' },
        value: 'value2',
        expected: undefined,
    },
    {
        input: { key1: 'value1', key2: 'value2', key3: 'value1' },
        value: 'value1',
        expected: 'key1',
    },
    {
        input: { key1: 'value1', key2: 'value2', key3: 'value3' },
        value: 'value4',
        expected: undefined,
    },
    { input: { key1: undefined, key2: 'value2' }, value: undefined, expected: 'key1' },
    { input: { key1: 'value1', key2: 'value2', key3: 12345 }, value: 12345, expected: 'key3' },
    { input: { key1: 'value1', key2: 'value2', key3: 12345 }, value: '12345', expected: undefined },
];

describe('getKeyByValue()', () => {
    testCases.forEach(({ input, value, expected }) => {
        it(`returns the key of value: ${value} if it's any in given object: ${expected}`, () => {
            const result = getKeyByValue(input, value);
            expect(result).toBe(expected);
        });
    });
});

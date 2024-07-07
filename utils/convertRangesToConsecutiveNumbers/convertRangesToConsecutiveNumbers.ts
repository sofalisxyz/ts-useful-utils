import { getNumbersRange } from "../getNumbersRange/getNumbersRange";

export const convertRangesToConsecutiveNumbers = (numbers: string[]) => {
    const res: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].includes('-')) {
            const range = numbers[i].split('-');
            const arrRange = getNumbersRange({ min: Number(range[0]), max: Number(range[1]) })

            res.push(...arrRange);
        } else {
            res.push(Number(numbers[i]))
        }
    }

    return res;
};

// input: ['1-5', '7', '9', '10-13']
// output: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13]

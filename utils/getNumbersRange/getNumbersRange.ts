
interface getNumbersRangeParams {
    min: number;
    max: number;
}

export const getNumbersRange = ({ min, max }: getNumbersRangeParams): number[] => {
    return [...Array(max - min + 1).keys()].map(i => i + min);
};

// input: {min: 1, max: 5}
// output: [1,2,3,4,5]

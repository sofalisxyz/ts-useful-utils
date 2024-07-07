export const convertNumbersToRanges = (numbers: number[]): string[] => {
    const ranges: string[] = [];
    let rangeStart = 0;
    let rangeEnd = 0;


    for (let i = 0; i < numbers.length; i++) {
        rangeStart = numbers[i];
        rangeEnd = rangeStart;
        while (numbers[i + 1] - numbers[i] === 1) {
            rangeEnd = numbers[i + 1]; // increment the index if the numbers sequential
            i++;
        }
        ranges.push(rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}-${rangeEnd}`);
    }
    return ranges;
};

// input: [1,2,3,5,7,8,9,11,12]
// output: ['1-3', '5', '7-9', '11-12']

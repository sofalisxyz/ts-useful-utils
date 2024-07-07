interface getArraysDifferenceParams {
    mainArray: unknown[];
    arrayToCompareWith: unknown[];
}

// TODO: add support to other types of comparsion according to SO below:
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript


// TODO: add support to filter 2 unknown objects with unknown (or defined in another param) keys
export const getArraysDifference = ({
    mainArray,
    arrayToCompareWith,
}: getArraysDifferenceParams): unknown[] => {
    return mainArray.filter((i) => {
        return !arrayToCompareWith.includes(i);
    });
};

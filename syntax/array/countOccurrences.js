function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function countOccurrencesFor(arr) {
    const result = {};

    for (const item of arr) {
        result[item] = (result[item] || 0) + 1;
    }
    console.log('result',result);
    return result;
}

const input = [2, 2, 33, 44, 66, 44];
const counts = countOccurrencesFor(input);
console.log('Counts:', counts);
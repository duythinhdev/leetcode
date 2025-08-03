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

    return result;
}

const input = [2, 2, 33, 44, 66, 44];
const counts = countOccurrences(input);
console.log('Counts:', counts);
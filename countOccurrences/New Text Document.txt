function countOccurrences(arr) {
  const countMap = {};

  arr.forEach(num => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  return countMap;
}

const array = [1, 2, 2, 4];
const frequencyCount = countOccurrences(array);

console.log(frequencyCount);
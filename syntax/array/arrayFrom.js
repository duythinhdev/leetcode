const str = 'hello';
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // Output: [1, 2, 3]
const mapFunc = (x) => x * 2;
const mappedArr = Array.from([1, 2, 3], mapFunc);
console.log(mappedArr); // Output: [2, 4, 6]
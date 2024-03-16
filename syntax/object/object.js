const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
const obj1 = {a: 1, b: 2, c: 3};
console.log(Object.values(obj1)); // Output: [1, 2, 3]
const obj3 = {a: 1, b: 2, c: 3};
console.log(Object.entries(obj3));
const target = {a: 1};
const source = {b: 2};
const result = Object.assign(target, source);
console.log(result); // Output: {a: 1, b: 2}
const obj4 = {a: 1, b: 2};
console.log(obj4.hasOwnProperty('a')); // Output: true
console.log(obj4.hasOwnProperty('toString')); // Output: false
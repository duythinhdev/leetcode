// solution 1 The reverse() method reverses the order of the elements in an array but it mutates the original array. 
// Let's take a simple example to demonistrate this case,
// const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

// solution 2 There are few solutions that won't mutate the original array. Let's take a look. 
// Using slice and reverse methods: In this case, just invoke the slice() method on the array to create a shallow copy followed by reverse() method call on the copy.
const originalArray = [1, 2, 3, 4, 5];
// const newArray = [...originalArray].reverse(); //Spread operator gives a new copy


const newArray = originalArray.reduce((accumulator, value) => {
    return [value, ...accumulator];
}, []);

console.log(originalArray);
console.log(newArray);
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let newArray = [];
let arrayTwo = [];

for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - k) {
        newArray.push(nums[i]);
    } else {
        arrayTwo.push(nums[i]);
    }
}

let rotatedArray = arrayTwo.concat(newArray);
console.log(rotatedArray);
let str = "28tech 28tech aaa";
let charCount = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
console.log(charCount);
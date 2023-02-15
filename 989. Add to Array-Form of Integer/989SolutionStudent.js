/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let stringNew = '';
    let sum = '';
    for(let i = 0; i < num.length; i ++){
        stringNew += num[i];
    }
    let valueCurrent = Number(stringNew);
    sum = valueCurrent + k;
    return sum.toString().split("").map(Number);
};
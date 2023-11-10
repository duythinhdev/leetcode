/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums), result= [];
    console.log('set',set);
    for(let i = 1; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
        console.log('i',i);
    }
    console.log('result',result);
    return result;
};
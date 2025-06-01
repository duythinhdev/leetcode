/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums),
        result= [];
    for(let i = 1; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
        console.log('i',i);
    }
    console.log('result',result);
    return result;
};

var findDisappeared = function(nums) {
    let set = new Set(nums), result= [];
    for(let i = 1; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
    }
    return result;
}

const log = findDisappeared([4,3,2,7,8,2,3,1]);
console.log('logs',log);


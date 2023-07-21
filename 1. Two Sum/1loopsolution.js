/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visitedNums = new Map();
    for(let i = 0 ; i < nums.length ;i++){
        const visitedNum = target - nums[i];
        const indexNum = visitedNums.get(visitedNum);
        if(indexNum >= 0){
            return [indexNum, i]
        }
        visitedNums.set(nums[i],i);
    } 
};
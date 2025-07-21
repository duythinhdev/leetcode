/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        const visitedNum = target - nums[i];
        console.log('visitedNum', visitedNum);
        const indexNum = visitedNums[visitedNum];
        if (indexNum >= 0) {
            return [indexNum, i]
        }
        visitedNums[nums[i]] = i;
    }
};

const object1 = twoSum([2, 11, 9, 15], 11);

console.log('object', object1);
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map  = new Map();
    for(let i = 0; i < nums.length;i ++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i]);
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
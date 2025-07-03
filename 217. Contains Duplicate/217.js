/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containDuplicate = function(nums) {
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

function objectSolution(nums) {
    let testObj = {};
    for (var i = 0; i < nums.length; i++) {
        let aNum = nums[i];
        if (testObj[aNum]) {
            return true;
        } else {
            testObj[aNum] = true;
        }
    }

    return false;
}
console.log('containsDuplicate', objectSolution([1,2,3,1]));
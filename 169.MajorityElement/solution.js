function majorityElement(nums) {
    const newMap = new Map();
    const length = nums.length / 2;
    for(let i = 0; i < nums.length; i++) {
        newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
        if(newMap.get(nums[i]) > length) {
            return nums[i];
        }
    }
}

const arrays = [3,2,3];

console.log(majorityElement(arrays)); // [3,2,3]
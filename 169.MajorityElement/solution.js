// function majorityElement(nums) {
//     const newMap = new Map();
//     const length = nums.length / 2;
//     for(let i = 0; i < nums.length; i++) {
//         newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
//         if(newMap.get(nums[i]) > length) {
//             return nums[i];
//         }
//     }
// }

function majorityElement(nums){
    const countMap = new Map();
    const length = nums.length / 2;
    const result = [];
    for(let i = 0; i < nums.length; i++){
        countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1);
        if(countMap.get(nums[i]) > length && !result.includes(nums[i])){
            result.push(nums[i]);
        }
    }
    return result.join('');
}
const arrays = [2,2,1,1,1,2,2,2];

console.log(majorityElement(arrays)); // [3,2,3]
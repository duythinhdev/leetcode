/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const findExactPath = (nums, target, start, end) => {
    let mid =  Math.floor(start + (end - start) / 2);

    while(start < end) {
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid ;

        mid =  Math.floor(start + (end - start) / 2);
    }

    return mid;
}
var searchInsert = function(nums, target) {
    // for(let i = 0; i < nums.length;i ++){
    //     if(nums[i] >= target) return i;
    // }
    // return nums.length;
    // let left = 0, right = nums.length
    // while (left <= right) {
    //     let mid = left + right >> 1;
    //     console.log('mid',mid);
    //     if (nums[mid] == target) return mid
    //     if (nums[mid] < target) left = mid + 1
    //     else right = mid - 1
    // }
    // return left;
    let n = nums.length;

    if(n == 1 && nums[0] == target) return 0;

    const path = findExactPath(nums, target, 0, n);

    return path;
};
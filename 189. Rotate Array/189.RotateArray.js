/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   k %= nums.length;
   const reverse = (left, right) => {
       const middle = Math.floor((left + right) / 2)
       console.log("middle",middle);
       for (let i = left; i <= middle; i++) {
          const temp = nums[i];
          nums[i] = nums[right - (i - left)];
          nums[right - (i - left)] = temp;
        }
   }
   reverse(0, nums.length - 1)
   reverse(0, k - 1)
   reverse(k, nums.length - 1)
    // if(k === 0) return nums;
    // let rotates = k % nums.length;
    // let temp =  nums.splice(nums.length - rotates, rotates);
    // nums.unshift(...temp);
    // return nums;
};
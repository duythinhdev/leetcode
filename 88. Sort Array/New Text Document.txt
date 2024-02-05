/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1.splice(m, n, ...nums2);
    // nums1.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0; i < nums1.length; i ++){
        if(i >= m){
            nums1.splice(i,1,nums2[count]);
            count++;
        }
    }
    return nums1.sort((a,b) => a - b );
};
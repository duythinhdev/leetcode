/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // solution 1
    // let firts = m - 1;
    // let second = n - 1;
    // let i = m + n - 1;
    // console.log("i",i);
    // console.log("firts",firts);
    // console.log("second",second);
    
    // while(second >= 0){
    //     let fval = nums1[firts];
    //     let sval = nums2[second];
    //     if(fval > sval){
    //        nums1[i] = fval;
    //        i--;
    //        firts--;
    //     }else {
    //        nums1[i] = sval;
    //        i--;
    //        second--;
    //     }
    // }
    // solution 2
    // nums1.splice(m, n, ...nums2);
    // nums1.sort((a, b) => a - b);
    // solution 3
    let count = 0;
    for(let j=0;j<nums1.length;j++){
        if(j>=m){
            nums1.splice(j,1,nums2[count]);
            count++;
        }
    }
    return nums1.sort((a,b)=>a-b);
};
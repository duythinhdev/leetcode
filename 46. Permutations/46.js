/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // let res = [];
    // let iterate = (arr, temp) => {
    //     if(arr.length === 0){
    //         res.push(temp);
    //         return;
    //     }
    //     for(let i = 0; i < arr.length; i ++){
    //         iterate(arr.filter((res,idx) => idx != 0),[...temp,arr[i]]);
    //     }
    // }
    // iterate(nums,[]);
    // return res;
    let sol = [];
    if(nums.length < 1) {
        return [[]];
    } else if(nums.length == 1) {
        return [[nums[0]]];
    } 
    for(let i = 0; i < nums.length; i++) {
        let numsCopy = [...nums]; 
        numsCopy.splice(i, 1); 
        let rtnVal = permute(numsCopy);
        for(let j = 0; j < rtnVal.length; j++) {
            sol.push([nums[i], ...rtnVal[j]])
        }  
    }
    return sol;
};

console.log(permute([4,5,6]));
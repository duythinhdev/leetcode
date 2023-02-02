/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
  
      let iterate = (arr,temp) =>{
          if(arr.length == 0){
              res.push(temp);
              return;
          }
          for(let i =0;i<arr.length;i++){
              iterate(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]]);
          }
      }
      iterate(nums,[]);
      return res;
};

console.log(permute([1,2,3]));
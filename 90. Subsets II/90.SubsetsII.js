function subsetsWithDup(nums){
    const result = []
    nums.sort((a, b) => a - b)
  
    const aux = (index, current) => {
      result.push(current)
      for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) {
          continue
        }
        aux(i + 1, [...current, nums[i]])
      }
    }
    aux(0, [])
    return result
}


const subset = subsetsWithDup([1,2,2,3,3]);
console.log(subset);
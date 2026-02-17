const subsetsWithDup = (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);

    const aux = (index, current) => {
        result.push([...current]);
        for(let i = index; i < nums.length; i ++){
            if(i > index && nums[i] === nums[i -1]) continue;
            current.push(nums[i]);
            aux(i + 1, current);
            current.pop();
        }
    }
    aux(0, []);
    return result
};

console.log(subsetsWithDup([1,2,2]));
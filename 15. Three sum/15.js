  const solutionArrays = [];
    const sortedNums = nums.sort((a, b) => a - b);
    for(let i =0 ;i < sortedNums.length - 2; i++){
        if(sortedNums[i] > 0){
            break;
        }
        if(i > 0 && sortedNums[i] == sortedNums[i - 1]){
            continue;
        }
        let left = i + 1;
        let right = sortedNums.length - 1;
        while(left < right){
            const subTotal = sortedNums[left] + sortedNums[right] + sortedNums[i];
            if(subTotal === 0){
                solutionArrays.push([sortedNums[i],sortedNums[left],sortedNums[right]])
                do{
                    left++;
                }while(sortedNums[left] === sortedNums[left - 1]);
                do{
                    right--;
                }while(sortedNums[left] === sortedNums[right + 1]);
            }
            else if(subTotal < 0){
             left++;
            }
            else {
                right--;
            }
        }
    }
    return solutionArrays;
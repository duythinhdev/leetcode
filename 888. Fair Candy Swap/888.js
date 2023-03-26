/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    // for(let i = 0; i < aliceSizes.length;i ++){
    //      if(aliceSizes[0] != bobSizes[1]){
    //         aliceSizes.splice(1,1,bobSizes[1]);
    //     }
    // }
    // return bobSizes;
    const totalAliceSize = aliceSizes.reduce((prev, current) => prev + current, 0);
    const totalBobSize = bobSizes.reduce((prev, current) => prev + current, 0);
    let sign = totalAliceSize > totalBobSize;
    let differ = Math.abs((totalAliceSize + totalBobSize) / 2 - totalAliceSize);
    for(let i = 0; i < aliceSizes.length;i ++){
        if(bobSizes.includes(aliceSizes[i] + differ) && !sign){
            return [aliceSizes[i],aliceSizes[i] + differ]
        }
        else if(bobSizes.includes(aliceSizes[i] - differ) && sign){
            return [aliceSizes[i],aliceSizes[i] - differ]
        }
    }

};
// console.log(fairCandySwap([1,1],[2,2]));
// console.log(fairCandySwap([1,2],[2,3]));
console.log(fairCandySwap([2,3],[1,3]));
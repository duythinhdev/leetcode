/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const newAray = []

    nums.forEach(item => map.set(item, (map.get(item) || 0) + 1));
    console.log('nums',nums);

    const sortArray = [...map.entries()].sort((a,b) => b[1] - a[1]);

    for(let i = 0; i < k; i ++){
        newAray.push(sortArray[i][0]);
    }
    return newAray;
};
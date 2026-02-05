/**
 * @param {number[]} nums
 * @param {number} k n log n
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const bucket = Array(nums.length + 1).fill().map(() => []);
    console.log('bucket',bucket);
    for (let [num, freq] of map.entries()) {
        bucket[freq].push(num);
    }
    console.log('bucket', bucket);
    const res = [];

    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        if (bucket[i].length > 0) {
            res.push(...bucket[i]);
        }
    }
    return res.slice(0, k);
};

const logList = topKFrequent([1,1,1,2,2,3], 2);


console.log('logList',logList);
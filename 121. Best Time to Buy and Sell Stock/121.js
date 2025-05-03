/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        console.log('min',min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
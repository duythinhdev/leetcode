/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let st of stones){
        if(jewels.includes(st)){
            count++;
        }
    }
    return count;
};
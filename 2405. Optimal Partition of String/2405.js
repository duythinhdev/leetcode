/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let seen = new Set()
    let cnt = 1
    for( let i of s ){
        if( seen.has(i) ){
            seen = new Set()
            cnt++
        }
        seen.add(i)
    }
    return cnt
};
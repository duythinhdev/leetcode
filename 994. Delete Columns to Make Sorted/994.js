/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;
    const len = strs[0].length;
    console.log("len",len);
    for(let i = 0; i < len; i++) {
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] < strs[j - 1][i]){
                result += 1;
                break;
            }
        }
    }
    return result
};


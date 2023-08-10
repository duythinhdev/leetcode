/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let newArray = [];
    if(num.length === k) return '0';
    for(let i = 0; i < num.length; i ++){
        while(k && newArray.length > 0  && newArray[newArray.length-1] > num[i]){
            newArray.pop()
            k--
        }
        newArray.push(num[i])
    } 
    while(k--){
        newArray.pop()
    } while(newArray[0]==="0"&&newArray.length>1){
        newArray.shift()
    }
    return newArray.join('');
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let index = 0;
    // x = s.trim();
    // console.log(x);
    // for(let i = 0; i < x.length;i++){
    //     if(x[i] == ' '){
    //         index = 0;
    //     }
    //     else {
    //         index++;
    //     }
    // }
    // return index;
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};
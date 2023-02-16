/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let chunks = [];
    let newString = s.split(' ');
    for(let i = 0; i < newString.length; i ++){
        chunks.push(newString[i].split('').reverse().join(''));
    }
    return chunks.join(' ');
};
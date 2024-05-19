/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately = function(word1, word2) {
//     const newArray = [];
//     const length = Math.max(word1.length, word2.length);
//     for (let i = 0; i < length; i++) {
//         if (word1[i]) newArray.push(word1[i]);
//         if (word2[i]) newArray.push(word2[i]);
//     }
//     return newArray.join('');
// };

var mergeAlternately = function(word1, word2) {
    let result = ''
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result
};
var mergeAlternately = function(word1, word2) {

    const result = new Array(word1.length + word2.length).fill('');

    let cursor = 0;

    const max = Math.max(word1.length, word2.length);

    for (let i = 0; i < max; i++) {
        if (i < word1.length) {
            result[cursor++] = word1[i];
        }
        if (i < word2.length) {
            result[cursor++] = word2[i];
        }
    }

    return result.join('');
};
//  Time: O(n); Space: O(n)
let log = mergeAlternately('abc', 'def');
console.log('mergeAlternately', log);
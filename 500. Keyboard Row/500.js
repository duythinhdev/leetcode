/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    const res = [];
    for(const word of words){
        if(canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3)) res.push(word);
    }
    return res;
    function canBeTyped(word,row){
        for(const  char of word){
            if(!row.has(char.toLowerCase())){
                return false;
            }
        }
        return true;
    }
};
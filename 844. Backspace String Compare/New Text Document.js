/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceString = (string) => {
    let output = [];
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "#") {
            output.pop();
        } else {
            output.push(string[i]);
        }
    }

    return output.join('');
}

var backspaceCompare = function(s, t) {
    return backspaceString(s) === backspaceString(t);
};
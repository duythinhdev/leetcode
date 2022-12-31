/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  
  const letters = [];
  const lengthOfShortestWord = Math.min(...strs.map(word => word.length));
  for (let i = 0; i < lengthOfShortestWord; i++) {
    const char = strs[0][i];
    if (strs.every(word => word[i] === char)) {
      letters.push(char);
    } else {
      break;
    }
  }
  console.log("letters",letters);
  return letters.join("");
};
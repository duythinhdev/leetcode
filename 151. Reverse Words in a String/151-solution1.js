/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(" ").reverse().filter(w => w !== "").join(" ");
};

console.log(reverseWords("the sky is blue"));
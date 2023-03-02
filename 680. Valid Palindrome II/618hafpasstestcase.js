/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
//    if (s.length == 0)
//         return false;
//     let i = 0;
//     let j = s.length - 1;
//     while (s[i] != s[j]) {
//         i++;
//         j--;
//         return false;
//     }
//     return true;
  let len = s.length;
  if(len <= 1){
      return true;
  }
  else if(s[0] !== s[len - 1] ){
      return false;
  }
  else if(s[0] === s[len - 1] ){
      return true;
  }
  else {
      return validPalindrome(s.substring(1,len-2));
  }
};
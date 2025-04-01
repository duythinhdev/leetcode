/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
      // let re = /[\W_]/g;
      // let lowRegStr = s.toLowerCase().replace(re,'');
      // console.log("lowRegStr",lowRegStr);
      // let reverseStr = lowRegStr.split('').reverse().join('');
      // console.log("reverseStr",reverseStr);
      // return reverseStr === lowRegStr;
    const re = /[^A-Za-z0-9]/g;
     s = s?.toLowerCase()?.replace(re, '');
    const len = s.length;
     for (let i = 0; i < len/2; i++) {
       if (s[i] !== s[len - 1 - i]) {
           return false;
       }
     }
     return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
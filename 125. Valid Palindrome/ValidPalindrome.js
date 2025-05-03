/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const re = /[^A-Za-z0-9]/g;
    s = s?.toLowerCase()?.replaceAll(re, '');
    const len = s?.length;
     for (let i = 0; i < len/2; i++) {
       if (s[i] !== s[len - 1 - i]) {
           return false;
       }
     }
     return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
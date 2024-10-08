/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // solution 1
    // let revered = x.toString().split('').reverse().join('');
    // console.log("revered",revered);
    // return (x.toString() === revered);

    // solution 2
    // let strString = x.toString();
    // let sumString = ''
    // for (const element of strString) {
    //     sumString += element;
    // }
    // return (sumString === strString)

    // solution 3
    if (x < 0) {
        return false;
    }
    let reverse = 0;
    let xcopy = x;
    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return reverse === xcopy;
};

const log = isPalindrome(121);

console.log('isPalindrome', log);
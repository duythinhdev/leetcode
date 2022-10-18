/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    console.log(x.toString());
    // let revered = x.toString().split('').reverse().join('');
    // console.log("revered",revered);
    // return (x.toString() === revered);
    let strString = x.toString();
    let sumString = ''
    for (const element of strString) {
        sumString +=element;
        console.log("sumString",sumString);
    }
    return (sumString === strString)
};
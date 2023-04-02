/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const numberOf5 = [];
    const numberOf10 = [];

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            numberOf5.push(5);
        } else if (bills[i] === 10) {
            if (!numberOf5.length) return false;
            numberOf5.pop();
            numberOf10.push(10);
        } else {
            if (numberOf10.length && numberOf5.length) {
                numberOf10.pop();
                numberOf5.pop();
                console.log("numberOf5",numberOf5);
            } else if (!numberOf10.length && numberOf5.length >= 3) {
                numberOf5.splice(numberOf5.length - 3, 3);
                console.log("numberOf5.length - 3",numberOf5.length - 3);
            } else {
                return false;
            }
        }
    }

    return true;
};
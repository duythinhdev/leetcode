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
            } else if (!numberOf10.length && numberOf5.length >= 3) {
                numberOf5.splice(numberOf5.length - 3, 3);
            } else {
                return false;
            }
        }
    }

    return true;
};
var lemonadeChangeSolutionTwo = function(bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;

    for(let bill of bills) {
        if(bill === 5) {
            five++
        } else if(bill === 10) {
            five--
            ten++
        } else if(bill === 20) {
            if(ten>0) {
                ten--
                five--
            } else {
                five = five - 3
            }
        }
        if(five < 0 || ten < 0)
            return false
    }

    return true;
};
console.log(lemonadeChange([5,5,5,10,20]));
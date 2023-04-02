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
        if(five < 0 || ten < 0){
            return false
        }
    }

    return true;
};
console.log(lemonadeChangeSolutionTwo([5,5,5,10,20]));
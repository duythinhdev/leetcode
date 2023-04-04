var lemonadeChangeSolutionTwo = function(bills) {
    let five = 0;
    let ten = 0;
    for(let bill of bills) {
        if(bill === 5) {
            five++
        } else if(bill === 10) {
            five--
            ten++
        } else if(bill === 20) {
            if(ten > 0) {
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
var lemondeChange = (bills) => {
    let five = 0;
    let ten = 0;
    for(let i = 0; i < bills.length;i ++){
        if(bills[i] == 5){
            five++
        }else if(bills[i] == 10){
            five--
            ten++
        }else if(bills[i] == 20){
            if(ten > 0){
                ten--;
                five--;
            }else {
                five = five -3;
            }
        }
        if(five < 0 || ten < 0){
            return false;
        }
    }
    return true;
}
console.log(lemondeChange([5,5,5,10,20]));
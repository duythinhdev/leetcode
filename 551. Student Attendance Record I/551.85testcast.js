/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countL = 0;
    let countA = 0;
    for(let i = 0; i < s.length;i ++){
        if(s[i].includes("L")){
            countL++;
        }else if(s[i].includes("A")) {
            countA++;
        }
    }
    if(countL < 3 && countA < 2){
        return true;
    }else {
        return false;
    }
};
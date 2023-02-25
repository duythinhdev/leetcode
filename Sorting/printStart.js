
function pritStart(high){
    for(let i = 0 ; i <= high; i ++){
        for(let j = 1; j <=i; j ++){
            console.log("*");
        }
        console.log("<br />")
    }
}
console.log(pritStart(20));
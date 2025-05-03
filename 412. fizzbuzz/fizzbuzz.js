var fizzBuzz = function(n) {
     let output = [];
     for(let i = 1 ; i <= n; i++){
         let newString = '';
         if(i % 3 === 0){
             newString += "Fizz"
         }
         if(i % 5 === 0){
             newString += "Buzz"
         }
         output.push(newString.length ? newString  : i.toString());
     }
     console.log('output',output);
     return output;
};
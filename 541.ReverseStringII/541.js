// var reverseStr = function(s, k) {
//     let chunks = [];
//     for(let i= 0; i < s.length;i+=k){
//         chunks.push(s.substring(i,i+k));
//     }
//     let newstring = '';
//     for(let i = 0; i < chunks.length; i++) {
//         if(i % 2 === 0){
//             newstring += chunks[i].split('').reverse().join('');
//         }else {
//             newstring += chunks[i];   
//         }
//     }
//     return newstring;
// };
var reverseStr = function(s, k) {
    var newString = '';
    var i;
    var flag = true;
    for(i = 0; i < s.length; i += k){
        newString += flag ? s.substring(i,i+k).split("").reverse().join("") :  s.substring(i,i+k);
        flag = !flag;
    }
    return newString;
};
reverseStr("abcdefg",2);
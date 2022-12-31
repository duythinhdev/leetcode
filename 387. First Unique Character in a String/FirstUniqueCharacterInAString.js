/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(i=0;i<s.length;i++){
         if(map.has(s[i])){
             map.set(s[i],2);
         }
         else{
             map.set(s[i],1);
         }
     }

    for(i=0;i<s.length;i++){
        if(map.has(s[i]) && map.get(s[i])===1){
            return i;
        }
    }
    return -1;
};
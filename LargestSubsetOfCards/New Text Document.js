function largestSubsetOfCards(k) { 
    const map = new Map();
    let max = 1; 
    const newArray = [];
    for(let i = 0; i < k.length;i ++) {
        for(let j = 0 ; j < k[i].length ;j ++) {
            if(map.has(k[i][j])){
                const duplicateNum = map.get(k[i][j]);
                if (duplicateNum + 1 > max ) {
                    max = duplicateNum + 1;
                }
                map.set(k[i][j],duplicateNum+1);
            } else {
                map.set(k[i][j],1);
            }
        }
    }

    for(let i = 0; i < k.length;i ++) {
        for(let j = 0 ; j < k[i].length ;j ++) {
            if(map.get(k[i][j]) === max){
                map.delete(k[i][j]);
                newArray.push(k[i][j]);
            }
        }
    }
    return newArray;
}
const ls = largestSubsetOfCards([[3,4,7,9],[2,3,4,6,7,8,11],[3,4,5,7,10]]);
console.log(ls);

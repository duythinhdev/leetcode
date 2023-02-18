function addMidElementArray(array,position) {
    let newArray = [];
    for(let i = 0 ;i < array.length; i++){
        if( i === position){
            newArray.push(3);
        } 
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(addMidElementArray([1,2,3,4,5,7,8],3));
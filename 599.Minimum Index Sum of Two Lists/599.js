function findRestaurant(list1, list2){
    const hashmap = new Map();
    let output;
    
    for (let i = 0; i < list1.length; i++) {
        hashmap.set(list1[i], i);
    }
    
    for (let j = 0; j < list2.length; j++) {
        const isExist = hashmap.has(list2[j]);
        const indexOfRestaurant = hashmap.get(list2[j]);
        if (isExist && (!output || j + indexOfRestaurant < output.sumIndex)) {
            output = {
                value: [list2[j]],
                sumIndex: j + indexOfRestaurant,
            }
        } else if (isExist && j + indexOfRestaurant === output.sumIndex) {
            output.value.push(list2[j]);
        }
    }
    
    return output.value;
}
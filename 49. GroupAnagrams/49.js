
const groupAnagrams = (strs) => {
    const map = new Map();
    for(const str of strs){
        const key = str.split('').sort().join('');
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}
console.log('groupAnagrams',groupAnagrams(['eat','tea','tan','ate','nat','bat']));

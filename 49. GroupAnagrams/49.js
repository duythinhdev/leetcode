// var groupAnagrams = function (strs) {
//     const map = new Map();
//
//     for (const str of strs) {
//         const key = str.split('').sort().join('');
//         console.log('key', key);
//
//         if (!map.has(key)) {
//             map.set(key, []);
//         }
//         map.get(key).push(str);
//     }
//
//     return Array.from(map.values());
// };

// const groupAnagrams = (strs) => {
//     const map = new Map();
//     for(const str of strs) {
//         const key = str.split('').sort().join('');
//         if(!map.has(key)){
//             map.set(key, []);
//         }
//         map.get(key).push(str);
//     }
//     return Array.from(map.values());
// }

const groupAnagrams = (strs) => {
    const map = new Map();
    for(const str of strs) {
        const count = new Array(26).fill(0);
        for(const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join('#');
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);
    }
};
console.log('groupAnagrams',groupAnagrams(['eat','tea','tan','ate','nat','bat']));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let sSorted = s.split('').sort().join('');
    // let tSorted = t.split('').sort().join('');
    // return tSorted === sSorted;
    if(s.length !== t.length) return false; 
    const sCount = {};
    const tCount = {};
    const n = s.length;
    for(let i = 0;i < n; i ++){
        if(!sCount[s[i]]) sCount[s[i]] = 0;
        if(!sCount[t[i]]) tCount[s[i]] = 0;
        sCount[s[i]]++;
        tCount[s[i]]++;
    }
    console.log("sCount",sCount);
    for(let ch in sCount){
        if(sCount[ch] !== tCount[ch])return false
    }
    return true; 
};
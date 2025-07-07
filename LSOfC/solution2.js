// function largestSubset(cards) {
//     const countMap = new Map();
//     const numArrays = cards.length;
//     for(let arr of cards){
//         let uniqueSet = new Set(arr);
//         for(let num of uniqueSet){
//             countMap.set(num, (countMap.get(num) || 0) + 1);
//         }
//     }
//     const commonElements =  [...countMap.keys()].filter(num => countMap.get(num) === numArrays);
//     const largest = cards[0]?.filter(num => commonElements.includes(num));
//     return largest;
// }
const arrays = [
    [1, 3, 4, 6, 7, 9],
    [1, 2, 4, 6, 8, 9],
    [1, 4, 6, 9]
];

function largestSubset(cards){
    const countMap = new Map();
    const numArrays = cards.length;
    for(let card of cards){
        let uniqueSet = new Set(card);
        for(let num of uniqueSet){
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }
    console.log('numArrays',numArrays);
    console.log('[...countMap.keys()]',[...countMap.keys()]);
    const commonElements = [...countMap.keys()].filter(num => countMap.get(num) === numArrays);
    const largest = cards[0]?.filter(num => commonElements.includes(num));
    console.log('largest', largest);
    return largest;
}
console.log(largestSubset(arrays));
// [1, 4, 6, 9]
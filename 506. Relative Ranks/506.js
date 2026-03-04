/**
 * @param {number[]} score
 * @return {string[]}
 */
// var findRelativeRanks = function(score) {
//     let newScore = [...score].sort((a, b) => b - a)
//     let mapRes = new Map()
//     for(let i = 0 ;i < newScore.length;i++){
//         mapRes.set(newScore[i],i);
//     }
//     for(let i = 0 ;i < score.length; i++){
//         score[i] ="" + (mapRes.get(score[i]) + 1);
//         if (score[i] === "1") score[i] = "Gold Medal"
//         if (score[i] === "2") score[i] = "Silver Medal"
//         if (score[i] === "3") score[i] = "Bronze Medal"
//     }
//     return score;
// };

// function findRelativeRanks(score) {
//     const n = score.length;
//     const sortedScores = [...score].sort((a, b) => b - a);
//
//     const rankMap = new Map();
//
//     for (let i = 0; i < n; i++) {
//         if (i === 0)      rankMap.set(sortedScores[i], "Gold Medal");
//         else if (i === 1) rankMap.set(sortedScores[i], "Silver Medal");
//         else if (i === 2) rankMap.set(sortedScores[i], "Bronze Medal");
//         else              rankMap.set(sortedScores[i], String(i + 1));
//     }
//
//     return score.map(s => rankMap.get(s));
// }

function findRelativeRanks(score){
    const n  = score.length;
    const sortedScores = [...score].sort((a, b) => b - a);

    const map = new Map();
    for(let i = 0; i < n; i++){
        if(i === 0) map.set(sortedScores[i], 'Gold Medal');
        else if(i === 1) map.set(sortedScores[i], 'Silver Medal');
        else if(i === 2) map.set(sortedScores[i], 'Bronze Medal');
        else map.set(sortedScores[i], String(i + 1));
    }
    return score.map(s => map.get(s));
}

console.log('findRelativeRanks',findRelativeRanks([10,3,8,9,4]));
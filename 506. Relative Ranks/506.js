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
//         score[i] = '' + (mapRes.get(score[i]) + 1);
//         if (score[i] === '1') score[i] = "Gold Medal"
//         if (score[i] === '2') score[i] = "Silver Medal"
//         if (score[i] === '3') score[i] = "Bronze Medal"
//     }
//     return score;
// };

function findRelativeRanks(score){
    const sortedScores = [...score].sort((a, b) => b - a);
    const rankMap = new Map();
    for(let i = 0; i < sortedScores.length; i++){
        if(i === 0){
            rankMap.set(sortedScores[i], 'Gold Medal');
            continue;
        }
        if(i === 1){
            rankMap.set(sortedScores[i], 'Silver Medal');
            continue;
        }
        if(i === 2){
            rankMap.set(sortedScores[i], 'Bronze Medal');
            continue;
        }
        rankMap.set(sortedScores[i], (i + 1).toString());
    }
    return sortedScores.map(s => rankMap.get(s));
}
console.log('findRelativeRanks', findRelativeRanks([10,3,8,9,4]));
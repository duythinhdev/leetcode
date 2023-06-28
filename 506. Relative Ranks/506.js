/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // create new decreasing sorted array
    let newScore = [...score].sort((a, b) => b - a)
    // map for saving pair result - place
    let mapRes = new Map()
    // Write pairs to map
    for(let i = 0 ;i < newScore.length;i++){
        mapRes.set(newScore[i],i);
    }
    console.log("mapRes",mapRes);
    // Write pairs to map
    for(let i = 0 ;i < score.length; i++){
        score[i] ="" + (mapRes.get(score[i]) + 1);
        console.log("score[i]",score[i]);
        if (score[i] === "1") score[i] = "Gold Medal"
        if (score[i] === "2") score[i] = "Silver Medal"
        if (score[i] === "3") score[i] = "Bronze Medal"
    }
    return score;
};
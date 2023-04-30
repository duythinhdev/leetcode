/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0; let y = 0;
    let action = {
        "R": () => x += 1,
        "L": () => x -= 1,
        "U": () => y += 1,
        "D": () => y -=1,
    }
    for(let i =0; i < moves.length; i ++){
        action[moves[i]]();
    }
    return x == 0 && y == 0;
};
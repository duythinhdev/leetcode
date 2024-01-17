/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let player1Score = 0;
    let player2Score = 0;
    for (let i = 0; i < player1.length; i++) {
       
            if((player1[i-1]) === 10){
                player1Score += (player1[i])*2;
                
            }
            else if(player1[i-2] === 10)
            {player1Score += (player1[i])*2;}
            else {
                player1Score += player1[i];
            }
            if((player2[i-1]) === 10){
                player2Score += (player2[i])*2;
                
            }
            else if( player2[i-2]===10){
                player2Score += (player2[i])*2;
            }
             else { player2Score += player2[i];}
             

    };
   
    if(player1Score > player2Score) return 1;
    else if(player1Score < player2Score) return 2;
    return 0;
}
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move !== 0) {
        move = move; 
    }
    else {
        move = getInput();
    }  
    return move;
}

function getComputerMove(move) {
    if (move !== 0) {
        move = move;
    }
    else {
        move = randomPlay();
    }
    return move;
    }


function getWinner(playerMove,computerMove){ 
    var winner;


   if ((playerMove === "rock" && computerMove === "paper")||
        (playerMove === "paper" && computerMove === "scissors")||
        (playerMove === "scissors" && computerMove === "rock")){
        winner = "computer"; 
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}
else if ((playerMove === "paper" && computerMove === "rock")||
        (playerMove === "scissors" && computerMove === "paper")||
        (playerMove === "rock" && computerMove === "scissors")){
        winner = "player"; 
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}
else {
        winner = "tie";
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
   var playerWins=0;
    var computerWins=0;
     var winner=getWinner();
        for(var i=0;i<5;i+=1){
           
    
             if (winner ==="player"&&playerWins<5) {
                    playerWins+=1;{
                    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
                    }
                }
                else if (winner==="computer"&&computerWins<5) {
                    computerWins+=1; { 
                    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
                    }
                }
        }
    
    if (playerWins===5) {
        console.log ("Player takes all!");
    }
    else if
      (computerWins===5) {
        console.log("Computer takes all!");
    }
    
    return[playerWins,computerWins];
        }




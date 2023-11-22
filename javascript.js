function FixInput(Input){
   return Input[0].toUpperCase() + Input.slice(1).toLowerCase();
}

function getComputerChoice(){
    let Choice =  Math.floor(Math.random() * 3);
    if (Choice == 0){
       let computerPull = "Rock";
       return computerPull;
    } else if (Choice == 1){
        let computerPull = "Paper";
        return computerPull;
    } else {
        let computerPull = "Scissors";
        return computerPull;
    }
}
function playRound(){

    let decision = prompt("Rock Paper or Scissors?");
    let Player = FixInput(decision);
    let Computer = getComputerChoice();
    
    let winner = 0;
    switch (Player){
        case "Rock":
            if (Computer == "Rock"){
                winner = 0;
                return  winner;
            } else if (Computer == "Paper"){
                winner = 2;
                return  winner;
            } else if (Computer == "Scissors"){
                winner = 1;
                return winner;
            }
            break;
        case "Paper":
            if (Computer == "Paper"){
                winner = 0;
                return  winner;
            } else if (Computer == "Scissors"){
                winner = 2;
                return winner;
            } else if (Computer == "Rock"){
                winner = 1;
                return winner;
            }
            break;
            case "Scissors":
            if (Computer == "Scissors"){
                winner = 0;
                return winner;
            } else if (Computer == "Rock"){
                winner = 2;
                return winner;
            } else if (Computer == "Paper"){
                winner = 1;
                return winner;
            }
            break;
    }
    return winner;
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    
    for (i=1;i<=5;i++){
        let game = playRound();
        if (game == 0){
            draws +=1;
        } else if (game == 1){
            playerWins +=1;
        } else {
            computerWins +=1;
        }
        console.log(game);
    }
    if (playerWins > computerWins){
        winner = "Player";
    } else {
        winner = "Computer";
    }
   alert("You played 5 Rounds, you won "+playerWins+" times, the computer won "+computerWins+" times and you got "+draws+" Draws!"+"\n The winner is: "+winner)
}
game();

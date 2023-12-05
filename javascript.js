let GameRounds = 0;
let PlayerWins = 0;
let ComputerWins = 0;
let Draws = 0;
const content = document.querySelector("#container");
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");
const results = document.createElement("div");
const startText = document.createElement("span");
const GameRoundsText = document.createElement("span");
rockbtn.setAttribute("id","Rock");
paperbtn.setAttribute("id","Paper");
scissorsbtn.setAttribute("id","Scissors");
startText.textContent = "Select either Rock, Paper or Scissors:";
startText.classList.add("startText");
results.classList.add("results");
results.setAttribute("id","results");
rockbtn.textContent = "Rock";
paperbtn.textContent = "Paper";
scissorsbtn.textContent = "Scissors";
const WinnerAnnouncement = document.createElement("span");
const playerWinstext = document.createElement("span");
const computerWinstext = document.createElement("span");
const Drawstext = document.createElement("span");
WinnerAnnouncement.setAttribute("id","WinnerAnnouncement");
content.append(startText,rockbtn,paperbtn,scissorsbtn,results,WinnerAnnouncement);
results.append(playerWinstext,computerWinstext,Drawstext,GameRoundsText)
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    switch(playRound(e.target.id)){
        case "Computer":
            GameRounds +=1;
            ComputerWins +=1;
            Draws +=0;
            PlayerWins +=0;
            if(GameRounds <=4){
            computerWinstext.textContent = "Computer Wins: "+ComputerWins;
            GameRoundsText.textContent = "Game Rounds: "+GameRounds;
            Drawstext.textContent = "Draws: "+Draws;
            playerWinstext.textContent = "Player Wins: "+PlayerWins;
            } else if(GameRounds == 5) {
                computerWinstext.textContent = "Computer Wins: "+ComputerWins;
                GameRoundsText.textContent = "Game Rounds: "+GameRounds;
                Drawstext.textContent = "Draws: "+Draws;
                playerWinstext.textContent = "Player Wins: "+PlayerWins;
                if (ComputerWins > PlayerWins){
                    WinnerAnnouncement.textContent = "The Winner is: Computer";
                } else if (Draws > PlayerWins) {
                    WinnerAnnouncement.textContent = "Draw";
                } else {
                    WinnerAnnouncement.textContent = "The Winner is: Player";
                }
            }
        break;
        case "Player":
            GameRounds +=1;
            PlayerWins +=1;
            Draws +=0;
            ComputerWins +=0;
            if(GameRounds <=4){
            computerWinstext.textContent = "Computer Wins: "+ComputerWins;
            GameRoundsText.textContent = "Game Rounds: "+GameRounds;
            Drawstext.textContent = "Draws: "+Draws;
            playerWinstext.textContent = "Player Wins: "+PlayerWins;
        } else if (GameRounds == 5) {
            computerWinstext.textContent = "Computer Wins: "+ComputerWins;
            GameRoundsText.textContent = "Game Rounds: "+GameRounds;
            Drawstext.textContent = "Draws: "+Draws;
            playerWinstext.textContent = "Player Wins: "+PlayerWins;
            if (ComputerWins > PlayerWins){
                WinnerAnnouncement.textContent = "The Winner is: Computer";
            } else if (Draws > PlayerWins) {
                WinnerAnnouncement.textContent = "Draw";
            } else {
                WinnerAnnouncement.textContent = "The Winner is: Player";
            }
        }
        break;
        case "Draw":
            GameRounds +=1;
            Draws +=1;
            PlayerWins +=0;
            ComputerWins +=0;
            if(GameRounds <=4){
            computerWinstext.textContent = "Computer Wins: "+ComputerWins;
            GameRoundsText.textContent = "Game Rounds: "+GameRounds;
            Drawstext.textContent = "Draws: "+Draws;
            playerWinstext.textContent = "Player Wins: "+PlayerWins;
        } else if(GameRounds == 5) {
            computerWinstext.textContent = "Computer Wins: "+ComputerWins;
            GameRoundsText.textContent = "Game Rounds: "+GameRounds;
            Drawstext.textContent = "Draws: "+Draws;
            playerWinstext.textContent = "Player Wins: "+PlayerWins;
            if (ComputerWins > PlayerWins){
                WinnerAnnouncement.textContent = "The Winner is: Computer";
            } else if (Draws > PlayerWins) {
                WinnerAnnouncement.textContent = "Draw";
            } else {
                WinnerAnnouncement.textContent = "The Winner is: Player";
            }
        }
        break;

    }
 
    });
});

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
function playRound(playerSelection){
    let Computer = getComputerChoice();
    let winner = 0;
    switch (playerSelection){
        case "Rock":
            if (Computer == "Rock"){
                winner = "Draw";
                
            } else if (Computer == "Paper"){
                winner = "Computer";
                
            } else if (Computer == "Scissors"){
                winner = "Player";
                
            }
            break;
        case "Paper":
            if (Computer == "Paper"){
                winner = "Draw";
              
            } else if (Computer == "Scissors"){
                winner = "Computer";
              
            } else if (Computer == "Rock"){
                winner = "Player";
               
            }
            break;
            case "Scissors":
            if (Computer == "Scissors"){
                winner = "Draw";
                
            } else if (Computer == "Rock"){
                winner = "Computer";
                
            } else if (Computer == "Paper"){
                winner = "Player";
            
            }
            break;
    }
    return  winner;
}

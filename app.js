// randomly chooses for three options 
// converts this into Rock, Paper or Scissors
// returns this value
function computerPlay() {
    // randomly chooses for three options 
    const option = Math.floor(Math.random() * 3);
    // converts this into Rock, Paper or Scissors
    // returns this value
    if (option === 0) {
        return "scissors";
    }
    else if (option === 1) {
        return "rock";
    }
    else {
        return "paper";
    }

}

// ask Player for either Rock, Paper or Scissors 
// make it to lower case
// return it
function playerPlay() {
    const playerMove = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return playerMove;
    
}


function playRound () {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a tie");
        return 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You loose Rock beats Scissors");
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win Scissors beats Paper");
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win Rock beats Scissors");
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie");
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You loose Paper beats Rock");
        return -1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You loose Scissors beats Paper");
        return -1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win Paper beats Rock");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It's a tie");
        return 0;
    }
}

// const playerSelection = playerPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection,computerSelection));

// play 5 times the playround function
// console log the result of every round(is being done in the playRound function)
// keep track on who wins 
// console log who won the game 

function game () {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    // play 5 times the playround function
    // keep track on who wins
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 1) {
            playerWins += 1;
        }
        else if (result === -1) {
            computerWins += 1;
        }
        else {
            draws += 1;
        }
    }
    // function that logs who the result
    function result() {
        console.log("You won " + playerWins + " times")
        console.log("The computer won " + computerWins + " times")
        console.log("There were " + draws + " draws")
    } 
    // console log who won the game
    if (playerWins > computerWins) {
        console.log("\nYou won the game")
        result();
    }
    else if (playerWins < computerWins) {
        console.log("\nYou lost the game")
        result();
    }
    else {
        console.log("\nIt's a tie")
        result();
    }
}
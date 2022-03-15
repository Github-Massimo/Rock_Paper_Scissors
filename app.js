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

// create an evenlistener which get the id of the fired event and passes
// it to the playRound function 

let gamesPlayed = 0;
let winsComputer = 0;
let winsHuman = 0; 
let draws = 0; 
const btn = document.querySelector('#buttons');
btn.addEventListener('click', function(e) {
    const targetId = e.target.id;
    switch(targetId) {
        case 'rock':
            playRound(targetId);
            break;
        case 'paper':
            playRound(targetId);
            break;
        case 'scissors':
            playRound(targetId);
            break;
    };

    //show points, if 5 games played refresh
    const displayPoints = document.querySelector('#currentPoints');
    displayPoints.textContent = `Games played: ${gamesPlayed} Computer: ${winsComputer} Draws: ${draws} Human: ${winsHuman}`;
    
    if (gamesPlayed === 5) {
        switch (true) {
            case (winsComputer < winsHuman):
                displayPoints.textContent = `You win!! Your wins: ${winsHuman} Computer wins: ${winsComputer} Draws: ${draws}`;
                gamesPlayed = 0;
                winsComputer = 0;
                winsHuman = 0;
                draws = 0;
                break;
            case (winsComputer > winsHuman):
                displayPoints.textContent = `You lose! Your wins: ${winsHuman} Computer wins: ${winsComputer} Draws: ${draws}`;
                gamesPlayed = 0;
                winsComputer = 0;
                winsHuman = 0;
                draws = 0;
                break;
            case (winsComputer === winsHuman):
                displayPoints.textContent = `It's a draw! Your wins: ${winsHuman} Computer wins: ${winsComputer} Draws: ${draws}`;
                gamesPlayed = 0;
                winsComputer = 0;
                winsHuman = 0;
                draws = 0;
                break;
        }
    };
});

function resultDisplay (winner) {
    //show points, if 5 games played refresh
    // const displayPoints = document.querySelector('#currentPoints');
    // const pointsToDisplay = document.createElement('div');
    // pointsToDisplay.textContent = `Computer: ${winsComputer} Draws: ${draws} Human: ${winsHuman}`;
    // displayPoints.appendChild(pointsToDisplay);


    const displayDiv = document.querySelector('#giveResult');
    const resultToDisplay = document.createElement('div');
    //clear Text
    displayDiv.textContent = 'Result: ';
    resultToDisplay.textContent = `${winner}`;
    displayDiv.appendChild(resultToDisplay);
};



function playRound (userInput) {
    const playerSelection = userInput;
    const computerSelection = computerPlay();
    // let winsComputer = 0;
    // let winsHuman = 0;
    // let roundsPlayed = 0;


    if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultDisplay("It's a tie");
        // console.log("It's a tie");
        draws++;
        gamesPlayed++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultDisplay("You loose Rock beats Scissors");
        // console.log("You loose Rock beats Scissors");
        winsComputer++;
        gamesPlayed++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultDisplay("You win Scissors beats Paper");
        // console.log("You win Scissors beats Paper");
        winsHuman++;
        gamesPlayed++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultDisplay("You win Rock beats Scissors");
        // console.log("You win Rock beats Scissors");
        winsHuman++;
        gamesPlayed++;
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        resultDisplay("It's a tie");
        // console.log("It's a tie");
        draws++;
        gamesPlayed++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        resultDisplay("You loose Paper beats Rock");
        // console.log("You loose Paper beats Rock");
        winsComputer++;
        gamesPlayed++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultDisplay("You loose Scissors beats Paper");
        // console.log("You loose Scissors beats Paper");
        winsComputer++;
        gamesPlayed++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        resultDisplay("You win Paper beats Rock")
        // console.log("You win Paper beats Rock");
        winsHuman++;
        gamesPlayed++;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        resultDisplay("It's a tie")
        // console.log("It's a tie");
        draws++;
        gamesPlayed++;
    }

    
}

// const playerSelection = playerPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection,computerSelection));

// play 5 times the playround function
// console log the result of every round(is being done in the playRound function)
// keep track on who wins 
// console log who won the game 

// function game () {
//     let playerWins = 0;
//     let computerWins = 0;
//     let draws = 0;
//     // play 5 times the playround function
//     // keep track on who wins
//     for (let i = 0; i < 5; i++) {
//         let result = playRound();
//         if (result === 1) {
//             playerWins += 1;
//         }
//         else if (result === -1) {
//             computerWins += 1;
//         }
//         else {
//             draws += 1;
//         }
//     }
//     // function that logs who the result
//     function result() {
//         console.log("You won " + playerWins + " times")
//         console.log("The computer won " + computerWins + " times")
//         console.log("There were " + draws + " draws")
//     } 
//     // console log who won the game
//     if (playerWins > computerWins) {
//         console.log("\nYou won the game")
//         result();
//     }
//     else if (playerWins < computerWins) {
//         console.log("\nYou lost the game")
//         result();
//     }
//     else {
//         console.log("\nIt's a tie")
//         result();
//     }
// }
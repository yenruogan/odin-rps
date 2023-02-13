let playerScore = 0
let computerScore = 0
let selection = ['rock', 'paper', 'scissors'];

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const results = document.getElementById('results');
const restart = document.getElementById('restart');

rock.addEventListener('click', playGameRock);
paper.addEventListener('click', playGamePaper);
scissors.addEventListener('click', playGameScissors);
restart.addEventListener('click', restartGame);


function playGameRock() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];


    if (playerScore < 5 && computerScore < 5) {
        if (computerSelection === 'rock') {
            results.innerHTML = "It's a tie!";
        } else if (computerSelection === 'paper') {
            results.innerHTML = "Paper beats Rock, you lose!";
            computerScore++;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
        } else {
            results.innerHTML = "Rock beats Scissors, you win!";
            playerScore++;
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        }

        if (playerScore === 5 && computerScore < 5) {
            results.innerHTML = "YOU WIN!"
        } else if (playerScore < 5 && computerScore === 5) {
            results.innerHTML = "Computer Wins :("
        }
    }
}

function playGamePaper() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    if (playerScore < 5 && computerScore < 5) {
        if (computerSelection === 'paper') {
            results.innerHTML = "It's a tie!";
        } else if (computerSelection === 'scissors') {
            results.innerHTML = "Scissors beats Paper, you lose!";
            computerScore++;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
        } else {
            results.innerHTML = "Paper beats Rock, you win!";
            playerScore++;
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        }

        if (playerScore === 5 && computerScore < 5) {
            results.innerHTML = "YOU WIN!"
        } else if (playerScore < 5 && computerScore === 5) {
            results.innerHTML = "Computer Wins :("
        }
    }
}

function playGameScissors() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    if (playerScore < 5 && computerScore < 5) {
        if (computerSelection === 'scissors') {
            results.innerHTML = "It's a tie!";
        } else if (computerSelection === 'rock') {
            results.innerHTML = "Rock beats Scissors, you lose!";
            computerScore++;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
        } else {
            results.innerHTML = "Scissors beats Paper, you win!";
            playerScore++;
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        }
        if (playerScore === 5 && computerScore < 5) {
            results.innerHTML = "YOU WIN!"
        } else if (playerScore < 5 && computerScore === 5) {
            results.innerHTML = "Computer Wins :("
        }
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
    results.innerHTML = "";
}

// // User inputs "rock", "paper", or "scissors"
// const playerSelection = function getPlayersChoice() {
//     let playerSelectionNew;
//     return playerSelectionNew;
// }

// // // Computer is randomly assigned "rock", "paper", or "scissors"
// const computerSelection = function getComputerChoice() {
//     let computerChoice = Math.random() * 4
//     computerChoice = Math.floor(computerChoice)
//     if (computerChoice <= 1) {
//         return "Rock"
//     } else if (computerChoice === 2) {
//         return "Paper"
//     } else if (computerChoice === 3) {
//         return "Scissors"
//     }
// }
// // If user input and computer input are the same it is a tie
// // If user input is "rock" and computer input is "scissors", user wins
// // If user input is "paper" and computer input is "rock", user wins
// // If user input is "scissors" and computer input is "paper", user wins
// // Otherwise computer wins

// function playRound(playerInput, computerInput) {
//     if (playerInput === computerInput) {
//         return `We have a tie! ${playerInput} and ${computerInput} are the same!`
//     } else if (playerInput === 'Rock' && computerInput === 'Scissors') {
//         return "You win! Rock beats Scissors"
//     } else if (playerInput === 'Paper' && computerInput === 'Rock') {
//         return "You win! Paper beats Rock"
//     } else if (playerInput === 'Scissors' && computerInput === 'Paper') {
//         return "You win! Scissors beats Paper"
//     } else {
//         return `You lose! ${computerInput} beats ${playerInput}`
//     }
// }



//Created a function to run the whole game
// function game() {
//     let rounds = prompt("How many rounds would you like to play?")
//     for (i = 0; i < rounds; i++) {
//         console.log(playRound(playerSelection(), computerSelection()))
//     }
// }

// console.log(playRound());
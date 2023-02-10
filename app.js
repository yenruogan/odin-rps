// User inputs "rock", "paper", or "scissors"
const playerSelection = function getPlayersChoice() {
    let playerSelectionNew = prompt("Please input 'rock', 'paper', or 'scissors':")
    while (playerSelectionNew !== "rock" && playerSelectionNew !== "paper" && playerSelectionNew !== 'scissors') {
        playerSelectionNew = prompt("Try again: rock, paper, or scissors?");
    }
    return playerSelectionNew[0].toUpperCase() + playerSelectionNew.slice(1).toLowerCase()
}

// Computer is randomly assigned "rock", "paper", or "scissors"
const computerSelection = function getComputerChoice() {
    let computerChoice = Math.random() * 4
    computerChoice = Math.floor(computerChoice)
    if (computerChoice <= 1) {
        return "Rock"
    } else if (computerChoice === 2) {
        return "Paper"
    } else if (computerChoice === 3) {
        return "Scissors"
    }
}
// If user input and computer input are the same it is a tie
// If user input is "rock" and computer input is "scissors", user wins
// If user input is "paper" and computer input is "rock", user wins
// If user input is "scissors" and computer input is "paper", user wins
// Otherwise computer wins
function playRound(playerInput, computerInput) {
    if (playerInput === computerInput) {
        return `We have a tie! ${playerInput} and ${computerInput} are the same!`
    } else if (playerInput === 'Rock' && computerInput === 'Scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerInput === 'Paper' && computerInput === 'Rock') {
        return "You win! Paper beats Rock"
    } else if (playerInput === 'Scissors' && computerInput === 'Paper') {
        return "You win! Scissors beats Paper"
    } else {
        return `You lose! ${computerInput} beats ${playerInput}`
    }
}

//Created a function to run the whole game 
function game() {
    let rounds = prompt("How many rounds would you like to play?")
    for (i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection(), computerSelection()))
    }
}

console.log(game());
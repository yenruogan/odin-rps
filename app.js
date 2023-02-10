// User inputs "rock", "paper", or "scissors"
const playerSelection = function getPlayersChoice() {
    let playerSelectionNew = prompt("Please input 'rock', 'paper', or 'scissors':")
    return playerSelectionNew.toLowerCase()
}
// Computer is randomly assigned "rock", "paper", or "scissors"
const computerSelection = function getComputerChoice() {
    let computerChoice = Math.random() * 4
    computerChoice = Math.floor(computerChoice)
    if (computerChoice <= 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else if (computerChoice === 3) {
        return "scissors"
    }
}
// If user input and computer input are the same it is a tie
function playRound(playerInput, computerInput) {
    if (playerInput === computerInput) {
        return `We have a tie! ${playerInput} and ${computerInput} are the same!`
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
        return "You win! Rock beats Paper"
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        return "You win! Scissors beats Paper"
    } else {
        return `You lose! ${computerInput} beats ${playerInput}`
    }
}

function game() {
    let rounds = prompt("How many rounds would you like to play?")
    for (i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection(), computerSelection()))
    }
}
// If user input is "rock" and computer input is "scissors", user wins
// If user input is "paper" and computer input is "rock", user wins
// If user input is "scissors" and computer input is "paper", user wins
// Otherwise computer wins
// Message appears if user would like to play again
console.log(game());
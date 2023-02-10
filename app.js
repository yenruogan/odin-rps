// User inputs "rock", "paper", or "scissors"
// Computer is randomly assigned "rock", "paper", or "scissors"
function getComputerChoice() {
    let compChoice = Math.random() * 4
    compChoice = Math.floor(compChoice)
    if (compChoice <= 1) {
        return "rock"
    } else if (compChoice === 2) {
        return "paper"
    } else if (compChoice === 3) {
        return "scissors"
    }
}
// If user input and computer input are the same it is a tie
// If user input is "rock" and computer input is "scissors", user wins
// If user input is "paper" and computer input is "rock", user wins
// If user input is "scissors" and computer input is "paper", user wins
// Otherwise computer wins
// Message appears if user would like to play again
console.log(getComputerChoice())
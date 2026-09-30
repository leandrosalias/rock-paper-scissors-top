const rock = 0
const paper = 1
const scissors = 2
const draw = 0
const humanWin = 1
const computerWin = -1

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == rock)
        return rock;
    if (choice == paper)
        return paper;
    return scissors;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors, and enter it: ")
    if (choice.toLowerCase() == "rock")
        return rock;
    if (choice.toLowerCase() == "paper")
        return paper;
    if (choice.toLowerCase() == "scissors")
        return scissors;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        alert("It's a draw!")
        return draw;
    }
        
    if (humanChoice == 0 && computerChoice == 1) {
        computerScore++
        alert("Computer wins! Paper beats Rock")
        return computerWin;
    }
    if (humanChoice == 0 && computerChoice == 2) {
        humanScore++
        alert("Human wins! Rock beats Scissors")
        return humanWin;
    }
    if (humanChoice == 1 && computerChoice == 0) {
        humanScore++
        alert("Human wins! Paper beats Rock")
        return humanWin;
    }        
    if (humanChoice == 1 && computerChoice == 2) {
        computerScore++
        alert("Computer wins! Scissors beats Paper")
        return computerWin;
    }
    if (humanChoice == 2 && computerChoice == 0) {
        computerScore++
        alert("Computer wins! Rock beats Scissors")
        return computerWin;
    }    
    if (humanChoice == 2 && computerChoice == 1) {
        humanScore++
        alert("Human wins! Scissors beats Paper")
        return humanWin;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore)
        alert("Human wins. The score was " + humanScore + " to " + computerScore)
    else if (computerScore > humanScore)
        alert("Computer wins. The score was " + computerScore + " to " + humanScore)
    else if (computerScore == humanScore)
        alert("It's a draw. The score was " + humanScore + " to " + computerScore)
}

playGame()
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= winningScore || computerScore >= winningScore)
        return;

    const roundResult = document.querySelector("#round-result");

    if (humanChoice == computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        roundResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }

    updateDisplay();
}

function updateDisplay() {
    const scoreElement = document.querySelector("#score");
    const winnerElement = document.querySelector("#winner");

    scoreElement.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === winningScore) {
        winnerElement.textContent = "🎉 Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === winningScore) {
        winnerElement.textContent = "💀 Game Over! The computer won the game.";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("#buttons-container button").forEach(button => {
        button.disabled = true;
    });
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
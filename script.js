const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const gameScreen = document.querySelector(".game-screen");
const handSignBig = document.querySelectorAll(".hand-sign--big");
const overlay = document.querySelector(".overlay");
const overlayBtn = document.querySelector(".overlay-btn");
const winningMsg = document.querySelector(".winning-msg");

function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choiceArray[random];
}

// function displayHandSign(humanChoice, computerChoice) {
//     const humanImageAddress = "images/" + humanChoice + ".svg";
//     const computerImageAddress = "images/" + computerChoice + ".svg";
//     handSignBig[0].setAttribute("src", humanImageAddress);
//     handSignBig[1].setAttribute("src", computerImageAddress);
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw");
    } else {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore.textContent = cScore + 1;
            } else {
                humanScore.textContent = hScore + 1;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                computerScore.textContent = cScore + 1;
            } else {
                humanScore.textContent = hScore + 1;
            }
        } else {
            // here the choice will default to scissors for the human
            if (computerChoice == "rock") {
                computerScore.textContent = cScore + 1;
            } else {
                humanScore.textContent = hScore + 1;
            }
        }
    }
    console.log(
        `human score: ${humanScore.textContent} and computer score: ${computerScore.textContent}`
    );
}

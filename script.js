const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const userChoiceImg = document.getElementById("user-choice--img");
const computerChoiceImg = document.getElementById("computer-choice--img");
const overlayBtn = document.querySelector(".overlay-btn");
const handSigns = document.querySelectorAll(".buttons img");
const score = document.querySelector(".score");

function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choiceArray[random];
}

function displayChoice(humanChoice, computerChoice) {
    userChoiceImg.src = `images/${humanChoice}.svg`;
    computerChoiceImg.src = `images/${computerChoice}.svg`;
    userChoiceImg.classList.remove("hidden");
    computerChoiceImg.classList.remove("hidden");
    userChoiceImg.classList.remove("animate-pop");
    computerChoiceImg.classList.remove("animate-pop");

    // restart animation by forcing reflow as animations don't restart by default
    // calculate the computed width of the element and return undefined(because of void) as we no use of the value itself
    void userChoiceImg.offsetWidth;

    userChoiceImg.classList.add("animate-pop");
    computerChoiceImg.classList.add("animate-pop");
}

function playRound(e) {
    const humanChoice = e.target.getAttribute("data-value");
    const computerChoice = getComputerChoice();
    displayChoice(humanChoice, computerChoice);
    let hScore = parseInt(humanScore.textContent);
    let cScore = parseInt(computerScore.textContent);
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
            if (computerChoice == "rock") {
                computerScore.textContent = cScore + 1;
            } else {
                humanScore.textContent = hScore + 1;
            }
        }
    }
    console.log(
        `human chose ${humanChoice} and computer chose ${computerChoice}`
    );
    if (humanScore.textContent == "5" || computerScore.textContent == "5") {
        setTimeout(restartGame, 200);
    }
}

function removeOverlay() {
    overlayBtn.parentElement.classList.remove("game-start");
}

function addOverlay() {
    overlayBtn.parentElement.classList.add("game-start");
}

function startGame() {
    removeOverlay();
    handSigns.forEach((handSign) =>
        handSign.addEventListener("click", playRound)
    );
}

function restartGame() {
    overlayBtn.textContent = "restart";
    const winningMsg = document.querySelector(".winning-msg");
    winningMsg.textContent =
        parseInt(humanScore.textContent) === parseInt(computerScore.textContent)
            ? "It's a draw 😕😕"
            : parseInt(humanScore.textContent) >
              parseInt(computerScore.textContent)
            ? "You Won 🤩🤩"
            : "You lost 😞😞";

    humanScore.textContent = 0;
    computerScore.textContent = 0;
    userChoiceImg.classList.add("hidden");
    computerChoiceImg.classList.add("hidden");
    addOverlay();
}

overlayBtn.addEventListener("click", startGame);

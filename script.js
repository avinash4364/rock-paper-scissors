const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const overlayBtn = document.querySelector(".overlay-btn");
const handSigns = document.querySelectorAll(".buttons img");

function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choiceArray[random];
}

function displayChoice(humanChoice, computerChoice) {
    const userChoiceImg = document.getElementById("user-choice--img");
    const computerChoiceImg = document.getElementById("computer-choice--img");
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

function playRound(humanChoice) {
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
}

function removeOverlay() {
    overlayBtn.parentElement.classList.remove("game-start");
}

// once
overlayBtn.addEventListener("click", removeOverlay);

handSigns.forEach((handSign) =>
    handSign.addEventListener("click", function (e) {
        playRound(e.target.getAttribute("data-value"));
    })
);

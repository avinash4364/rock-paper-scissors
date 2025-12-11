let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt("Choose b/w rock, paper and scissors")
        .toLowerCase()
        .trim();
    const choiceArray = ["rock", "paper", "scissors"];
    if (choice && choiceArray.includes(choice))
        // checks for undefined values
        return choice;
    else {
        choice = prompt("You Chose wrong, Try again").toLowerCase().trim();
        if (choice && choiceArray.includes(choice)) return choice;
        else {
            alert("Well, You chose wrong again, computer wins by default");
            return "";
        }
    }
}

function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choiceArray[random];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice) {
        console.log(
            `human chose ${humanChoice} and computer chose ${computerChoice}`
        );
        if (humanChoice == computerChoice) {
            console.log("It's a draw");
        } else {
            if (humanChoice == "rock") {
                if (computerChoice == "paper") computerScore++;
                else humanScore++;
            } else if (humanChoice == "paper") {
                if (computerChoice == "scissors") computerScore++;
                else humanScore++;
            } else {
                // here the choice will default to scissors for the human
                if (computerChoice == "rock") computerScore++;
                else humanScore++;
            }
        }
    } else {
        console.log(
            "human chose the wrong option and computer wins by default"
        );
        computerScore++;
    }
}

const overlayBtn = document.querySelector(".overlay-btn");
const handSigns = document.querySelectorAll(".buttons img");
function removeOverlay() {
    overlayBtn.parentElement.classList.remove("game-start");
}

handSigns.forEach((handSign) =>
    handSign.addEventListener("click", function (e) {
        console.log(e.target.getAttribute("data-value"));
    })
);
overlayBtn.addEventListener("click", removeOverlay);

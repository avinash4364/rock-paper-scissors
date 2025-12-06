// let humanScore = 0;
// let computerScore = 0;

// function playGame() {
//     // increment score for whoever wins amongst computer and human

//     function playRound(humanChoice, computerChoice) {
//         let hc = humanChoice.toLowerCase();
//         let humanWin;
//         let computerWin;
//         if (hc === "rock") {
//             if (computerChoice === "paper") {
//                 computerScore++;
//                 computerWin = true;
//             } else if (computerChoice === "scissors") {
//                 humanScore++;
//                 humanWin = true;
//             }
//         } else if (hc === "paper") {
//             if (computerChoice === "rock") {
//                 humanWin = true;
//                 humanScore++;
//             } else if (computerChoice === "scissors") {
//                 computerScore++;
//                 computerWin = true;
//             }
//         } else {
//             if (computerChoice === "paper") {
//                 humanWin = true;
//                 humanScore++;
//             } else if (computerChoice === "rock") {
//                 computerScore++;
//                 computerWin = true;
//             }
//         }

//         if (humanWin) {
//             console.log(`You rock! ${humanChoice} beats ${computerChoice}`);
//             console.log(humanScore);
//         } else if (computerWin) {
//             console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//             console.log(computerScore);
//         } else {
//             console.log(`oops! It's a draw`);
//         }
//     }

//     // get the computer choice b/w rock , paper , scissors
//     function getComputerChoice() {
//         let choice;
//         const randomNum = Math.floor(Math.random() * 3 + 1);
//         //   console.log(randomNum);
//         switch (randomNum) {
//             case 1:
//                 choice = "rock";
//                 break;
//             case 2:
//                 choice = "paper";
//                 break;
//             case 3:
//                 choice = "scissors";
//                 break;
//             default:
//                 break;
//         }
//         return choice;
//     }

//     // get the input from the user b/w rock, paper and scissors
//     function getHumanChoice() {
//         const choice = prompt("Choose b/w rock, paper and scissors");
//         return choice;
//     }

//     // call the playround function 5 times
//     for (let index = 0; index < 5; index++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playGame(humanSelection, computerSelection);
//     }
// }

// playGame();

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt("Choose b/w rock, paper and scissors").toLowerCase();
    const choiceArray = ["rock", "paper", "scissors"];
    if (choiceArray.includes(choice)) return choice;
    else {
        choice = prompt("You Chose wrong, Try again").toLowerCase();
        if (choiceArray.includes(choice)) return choice;
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

function playGame() {
    let humanChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.group("The final Score:");
    console.log(`human: ${humanScore}`);
    console.log(`computer: ${computerScore}`);
    console.groupEnd();

    if (humanScore === computerScore) {
        console.log("It's a draw");
    } else {
        if (humanScore > computerScore) {
            console.log("You Win!");
        } else console.log();
    }
}

playGame();

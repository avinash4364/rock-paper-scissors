function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
        let choice = prompt("Choose b/w rock, paper and scissors")
            .toLowerCase()
            .trim();
        const choiceArray = ["rock", "paper", "scissors"];
        if (choice && choiceArray.includes(choice))
            return choice; // here it is also checked for undefined values
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

    function playNRounds(rounds = 5) {
        let humanChoice;
        let computerChoice;
        for (let round = 0; round < rounds; round++) {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        console.group("The final Score:");
        console.log(`human: ${humanScore}`);
        console.log(`computer: ${computerScore}`);
        console.groupEnd();

        if (humanScore === computerScore) {
            console.log("%cIt's a draw😞😞", "font-size:24px");
        } else {
            if (humanScore > computerScore) {
                console.log(
                    "%cYou Win😀🥳",
                    "font-size:36px; font-weight:bold;"
                ); // the %c specifier acts as a placeholder for where the CSS styling should begin and the second argument can be used to specify the CSS styling to apply
            } else console.log("%cYou Lost🥹😕", "font-size:18px");
        }
    }

    playNRounds();
}

playGame();

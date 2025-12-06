// This is main function which lets user play rock-paper-scissors against computer 5 times.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // function to ask user to choose b/w rock , paper and scissors
    // a user can enter his option in capital or small letters
    function getHumanChoice() {
        let choice = prompt("Choose b/w rock, paper and scissors")
            .toLowerCase()
            .trim();
        const choiceArray = ["rock", "paper", "scissors"];
        if (choice && choiceArray.includes(choice))
            return choice; // here it is also checked for undefined values
        // if he choses any other options than the ones in the choiceArray
        // he is given one more chance to make the correct choice again, otherwise he loses to computer by default
        else {
            choice = prompt("You Chose wrong, Try again").toLowerCase().trim();
            if (choice && choiceArray.includes(choice)) return choice;
            else {
                alert("Well, You chose wrong again, computer wins by default");
                return ""; // return an empty string if the user choses nothing or any value other than rock, paper and scissors
            }
        }
    }

    // get computer choice b/w rock , paper and scissors using Math.random() function of JavaScript
    function getComputerChoice() {
        const choiceArray = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        return choiceArray[random];
    }

    // comparing the human choice and computer choice and incrementing the score of the winner
    // the score of both human and computer is a top local variable so that it is accessible everywhere in the current function.
    function playRound(humanChoice, computerChoice) {
        if (humanChoice) {
            // if human chose amongst rock, paper and scissors
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
            // if the human chose the wrong option (which could be null, undefined or other values)
            console.log(
                "human chose the wrong option and computer wins by default"
            );
            computerScore++;
        }
    }

    // function which lets user and computer play n rounds of rock-paper-scissors with each other
    // by default they will play with each other 5 times - done using default parameter
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

    // play game b/w computer and user n times (by default it is 5 times)
    playNRounds();
}

// play rock-paper-scissors b/w user and computer
playGame();

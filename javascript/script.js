function getComputerChoice() {
    let roShamBo = parseInt(Math.random() * 10);
    let choice;

    if (roShamBo <= 3) {choice = "rock"} 
    else if (roShamBo <= 6) {choice = "paper"} 
    else {choice = "scissors"}

    return choice;
}

function stringSanitizer(string) {
    return string.trim().toLowerCase();
}

function rockPaperScissors(player, comp) {
    if (player === comp) {
        return 'tie';
    }

    if (player === 'rock') {
        if (comp === 'scissors') {return "win"}
        if (comp === 'paper') {return "lose"}
    }

    if (player === 'paper') {
        if (comp === 'rock') {return "win"}
        if (comp === 'scissors') {return "lose"}
    }
    

    if (player === 'scissors') {
        if (comp === 'paper') {return 'win'}
        if (comp === 'rock') {return "lose"}
    }

    return 'unknown value';
}

function getMessage(outcome, player, comp) {
    if (outcome === "win") {
        return `You win! ${player} beats ${comp}`
    } else if (outcome == 'lose') {
        return `You lose! ${comp} beats ${player}`
    } else if (outcome === 'tie') {
        return 'You tied!'
    } else {
        return 'Wrong input!' 
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {

        let playerSelection = stringSanitizer(prompt("Rock paper scissors"));
        let compSelection = getComputerChoice();
        let outcome = rockPaperScissors(playerSelection, compSelection);
        let message = getMessage(outcome, playerSelection, compSelection);

        if(outcome === "win") {playerScore++};
        if(outcome === "lose") {compScore++};

        console.log(message);
    }
    if(playerScore > compScore) {console.log("You win the game!")}
    if(compScore > playerScore) {console.log("You lost the game")}
    if(compScore === playerScore) {console.log("It's a tie!");}
}

game();
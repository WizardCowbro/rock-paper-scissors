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

/*
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
*/

//logic for the game
let playerChoice = null;
let compChoice = null;

let playerScore = 0;
let compScore = 0;
let gamesPlayed = 0;
let gameOver = false;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const shoot = document.querySelector("#shoot");

rock.addEventListener("click", () => {
    if(gameOver) return;
    playerChoice = 'rock';
    document.querySelector('.text').textContent = "Rock!";
});

paper.addEventListener('click', () => {
    if(gameOver) return;
    playerChoice = 'paper';
    document.querySelector('.text').textContent = "Paper!";
})

scissors.addEventListener('click', () => {
    if(gameOver) return;
    playerChoice = 'scissors';
    document.querySelector('.text').textContent = "Scissors!";
})

shoot.addEventListener('click', () => {
    compChoice = getComputerChoice()
    if (gameOver || playerChoice === null) return;
    let outcome = rockPaperScissors(playerChoice, compChoice)
    let message = getMessage(outcome, playerChoice, compChoice)

    if (outcome === 'win') {
        playerScore++;
        gamesPlayed++;
    } else if (outcome === 'lose') {
        compScore++;
        gamesPlayed++;
    } else {
        gamesPlayed++;
    }

    document.querySelector('.outcome').textContent = message;
    document.querySelector('.text').textContent = 'Rock Paper Scissors';
    console.log(outcome);

    if (gamesPlayed === 5) {
        gameOver = true;
        document.querySelector('.text').textContent = 'Game Over!';
        document.querySelector('.outcome').textContent = `Player score: ${playerScore} Computer Score: ${compScore}`;
    }
});







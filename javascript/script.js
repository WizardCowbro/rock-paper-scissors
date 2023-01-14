function getComputerChoice() {
    let roShamBo = parseInt(Math.random() * 10);
    let choice;

    if (roShamBo <= 3) {choice = "rock"} 
    else if (roShamBo <= 6) {choice = "paper"} 
    else {choice = "scissors"}

    return choice;
}

function rockPaperScissors(player, comp) {
    
}

function stringSanitizer(string) {
    return string.trim().toLowerCase();
}

function outcome(player, comp) {
    if (player === comp) {
        return 'tie';
    }

    if (player === 'rock') {
        if (comp === 'scissors') {return true;}
        if (comp === 'paper') {return false;}
    }

    if (player === 'paper') {
        if (comp === 'rock') {return true;}
        if (comp === 'scissors') {return false}
    }

    if (player === 'scissors') {
        if (comp === 'paper') {return true}
        if (comp === 'rock') {return false}
    }

    return 'unknown value';
}


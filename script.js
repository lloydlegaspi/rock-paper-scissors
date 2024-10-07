let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Please enter your choice: rock, paper, or scissors.');
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert('Please enter a valid choice.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("You pick " + humanChoice);
    console.log("Enemy pick: " + computerChoice);
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                humanChoice === 'paper' && computerChoice === 'rock' ||
                humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice + '.');
        return humanScore;
     } else {
        computerScore++;
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice + '.');
        return computerScore;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log('ROUND ' + (i + 1));
        console.log(playRound(humanChoice, computerChoice));
        console.log('*SCOREBOARD* You: ' + humanScore + ' Enemy: ' + computerScore);
    }
    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (humanScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log("It's a tie!");
    }
}


console.log(playGame());
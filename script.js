let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const result_p = document.querySelector('.result > p');
const reset_button = document.getElementById('reset');

reset_button.addEventListener('click', function() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'Game reset!';
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!';
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose!';
}

function draw(userChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'It\'s a tie! You both picked ' + userChoice + '.';
}

function game(userChoice) {
    if (userScore >= 5 || computerScore >= 5) {
        if (userScore > computerScore) {
            result_p.innerHTML = 'You win the game!\nFinal score - You: ' + userScore + ', Computer: ' + computerScore + '.';
        } else if (userScore < computerScore) {
            result_p.innerHTML = 'You lose the game!\nFinal score - You: ' + userScore + ', Computer: ' + computerScore + '.';
        } else {
            result_p.innerHTML = 'It\'s a tie game!\nFinal score - You: ' + userScore + ', Computer: ' + computerScore + '.';
        }
        return;
    }
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    });

    paper_div.addEventListener('click', function() {
        game('paper');
    });

    scissors_div.addEventListener('click', function() {
        game('scissors');
    });
}

main();

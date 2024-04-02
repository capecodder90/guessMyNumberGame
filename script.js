'use strict';

// generate a random whole number between 0 and 20
function genNumber() {
    return Math.trunc(Math.random() * 20) + 1;
};
// store value in variable
let secretNumber = genNumber();
let score = 20;
let highScore = 0;
// function to modify message text based on circumstances
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// add event listener to "check" button - inital game play
document.querySelector('.check').addEventListener('click', function () {

    // store entered value in input box in variable as a number
    const guess = Number(document.querySelector('.guess').value);

    // if no number entered, entered 0 or below, or entered 21 or above
    if (!guess || guess <= 0 || guess >= 21) {
        displayMessage('Enter a # from 1-20.');
        // if correct number entered - win game   
    } else if (guess === secretNumber) {
        // display the correct secret number in number div
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('You got it!');
        // change the body background-color to green
        document.querySelector('body').style.backgroundColor = '#60b347';
        // set number div width to 30rem
        document.querySelector('.number').style.width = '30rem';
        // check if score is higher than the current highScore, if true, change the text of the highscore element to the new highScore value
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };
        // when the guess is incorrect
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // check whether entered number is lower or higher than the secret number, display message accordingly
            displayMessage(guess < secretNumber ? 'Nope. Too low.' : 'Too high. Try again.');
            // decrease score
            score--;
            // update score
            document.querySelector('.score').textContent = score;
            // when the player runs out of guess - lose game
        } else {
            displayMessage('Aww, you lose.');
            score--;
            document.querySelector('.score').textContent = score;
        };
    };
});

// add event lister to "again" button - play game again
document.querySelector('.again').addEventListener('click', function () {
    score = 20; // reset score to 20
    secretNumber = genNumber();
    displayMessage('Start guessing...'); // reset message
    document.querySelector('.score').textContent = score; // reset score
    document.querySelector('.number').textContent = '?'; // reset text content of number
    document.querySelector('.guess').value = ''; // reset input value to an empty string
    document.querySelector('.number').style.width = '15rem'; // reset width of number block  
    document.querySelector('body').style.backgroundColor = '#222'; // reset background color to black
});
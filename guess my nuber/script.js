'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('no number');
        //document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'correct number';
        displayMessage('correct number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent =
            //guess < secretNumber ? 'too low number' : 'too high number';
            displayMessage(
                guess < secretNumber ? 'too low number' : 'too high number'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('you lost the game');
            //document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    /* else if (guess < secretNumber) {
                    if (score > 1) {
                        document.querySelector('.message').textContent = 'too low number';
                        score--;
                        document.querySelector('.score').textContent = score;
                    } else {
                        document.querySelector('.message').textContent = 'you lost the game';
                        document.querySelector('.score').textContent = 0;
                    }
                } else if (guess > secretNumber) {
                    if (score > 1) {
                        document.querySelector('.message').textContent = 'too high number';
                        score--;
                        document.querySelector('.score').textContent = score;
                    } else {
                        document.querySelector('.message').textContent = 'you lost the game';
                        document.querySelector('.score').textContent = 0;
                    }
                }*/
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'start guessing....';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let highscore = document.querySelector('.highscore').textContent;
let score = 20;

const displayMessage = (msg) => {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else{
        if(score>1){
            guess>secretNumber ? displayMessage('📈 Too high!'): displayMessage('📉 Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('💔 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
        
    }

});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});
'use strict';

let secretNumber = parseInt(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);


  // When there is no input
  if (!guessNumber) {
    displayMessage('Please enter the valid number');

    // When player wins
  } else if (guessNumber === secretNumber) {
    
    displayMessage('Your guess was right');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
    
      displayMessage(guessNumber > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled=true;  
    }
  }

 
});

document.querySelector('.again').addEventListener('click', function () {
 console.log("Again");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled=false;    
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});




'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretnumber);
let scorenumber = 20;
let highscorenumber = 0;
let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let gd = Number(document.querySelector('.guess').value);
  //console.log(gd);
  if (!gd) {
    // document.querySelector('.message').textContent = 'No Number';
    displaymessage('No Number');
  } else if (gd === secretnumber) {
    //document.querySelector('.message').textContent = 'You won!!!!';
    displaymessage('You won!!!!');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    scorenumber--;
    document.querySelector('.score').textContent = scorenumber;
    if (scorenumber > highscorenumber) {
      highscorenumber = scorenumber;
      document.querySelector('.highscore').textContent = highscorenumber;
    }
  } else if (gd !== secretnumber) {
    if (scorenumber > 1) {
      //   document.querySelector('.message').textContent =
      //     gd > secretnumber ? 'Too High' : 'Too Low';
      displaymessage(gd > secretnumber ? 'Too High' : 'Too Low');
      scorenumber--;
      document.querySelector('.score').textContent = scorenumber;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displaymessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (gd > secretnumber) {
  //     if (scorenumber > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       scorenumber--;
  //       document.querySelector('.score').textContent = scorenumber;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (gd < secretnumber) {
  //     if (scorenumber > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       scorenumber--;
  //       document.querySelector('.score').textContent = scorenumber;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  scorenumber = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scorenumber;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

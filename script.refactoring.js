'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let higthScore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guessInput = Number(document.querySelector('.guess').value);
    if(!guessInput){
        displayMessage('No Number 😎');
    }else if(guessInput === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        displayMessage('Correct Number');
        document.querySelector('.number').style.width = '20px';
        if(score > higthScore ){
            higthScore = score;
            document.querySelector('.highscore').textContent = higthScore;
        }
        
        
    }else if(guessInput != secretNumber){
        
        if(score > 1){
            displayMessage(guessInput > secretNumber ? 'To higth 🫣' : 'To low🤪');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.score').textContent = 0;
            displayMessage('You lose👻 !!!!');
        }
    }

    
    
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = Math.trunc(Math.random()*20) + 1 ;
    document.body.style.background = 'black';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
  
    


});
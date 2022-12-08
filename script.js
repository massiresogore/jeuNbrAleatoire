'use strict';


const secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let higthScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guessInput = Number(document.querySelector('.guess').value);
    if(!guessInput){
        document.querySelector('.message').textContent = 'No Number 😎';
    }else if(guessInput === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        document.querySelector('.message').textContent = 'Correct Number 🌠';
        document.querySelector('.number').style.width = '20px';
        if(score > higthScore ){
            higthScore = score;
            document.querySelector('.highscore').textContent = higthScore;
        }
        
        
    }else if(guessInput > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'To higth 🫣';
            
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lose👻 !!!!';
        }
            
       
        
    }else if( guessInput < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'To Low 🥶';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lose👻 !!!!';
        }
       
       

    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    document.body.style.background = 'black';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    


});
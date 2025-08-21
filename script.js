const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerChoice = ''; 

const buttons = document.querySelectorAll('.game-buttons');

 buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    playerChoice = button.dataset.choice;
    playGame(); 
    console.log(playerChoice)
  });
});

// Computer choice logic



function getComputerChoice () {
    let math = Math.floor(Math.random() * 3)
    let choice
    if (math === 0) {
     choice = 'rock' 
    } else if (math === 1) {
     choice = 'paper'
    } else {
     choice = 'scissors'
    }
    return choice
    console.log(choice)
 };
 
 
 //Play round 
 let rounds = 1;
 let computerScore = 0;
 let humanScore = 0;

     const numberOfRounds = document.getElementById('number-of-rounds');
     const yourScore = document.getElementById('your-score');
     const yourChoice = document.getElementById('your-choice');
     const compScore = document.getElementById('computer-score');
     const compsChoice = document.getElementById('comps-choice')
     const readOut = document.getElementById('read-out');
     const playerDiv = document.querySelectorAll('.player')
     const computerDiv = document.querySelectorAll('.computer')


 function playRound(human, computer) {
 console.log(human, computer)
     if (human === computer) {
     playerDiv[0].style.backgroundColor = 'rgb(108, 195, 235)';
     computerDiv[0].style.backgroundColor = 'rgb(108, 195, 235)';
     } else if (human === 'rock') {
     thisRound = rockChoice(human, computer);
     } else if (human === 'paper') {
     thisRound = paperChoice(human, computer);
     } else if (human === 'scissors') {
     thisRound = scissorsChoice(human, computer)
     } 
     rounds ++;
 } 
  
 function rockChoice(human, computer){
     if (computer === 'paper'){
         computerScore++
         playerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
         computerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
         console.log(playerDiv);
     } else {
         humanScore++
          playerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
          computerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
          console.log(playerDiv);
         console.log(humanScore)
     }
 }
 
 function paperChoice(human, computer) {
     if (computer === 'scissors'){
         computerScore++
         playerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
         computerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
     } else {
         humanScore++
         playerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
         computerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
     }  
 }
 
 function scissorsChoice(human, computer) {
     if (computer === 'rock'){
         computerScore++
         playerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
         computerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
     } else {
         humanScore++
         playerDiv[0].style.backgroundColor = 'rgb(108, 235, 140)';
         computerDiv[0].style.backgroundColor = 'rgb(235, 108, 108)';
     }
 }

 function resetGame(){
    rounds = 1;
    computerScore = 0;
    humanScore = 0;
    playerDiv[0].style.backgroundColor = '#e4d8e3';
    computerDiv[0].style.backgroundColor = '#e4d8e3';
 
    numberOfRounds.textContent = `Round ${rounds}!`;
    yourScore.textContent = `${humanScore}`;
    yourChoice.textContent = '';
    compScore.textContent = `${computerScore}`;
    compsChoice.textContent = '';
    readOut.textContent = 'Good Luck!';
 }
 
 
 //Play game
 function playGame() { 
  let computerChoice = getComputerChoice();
   let round = playRound(playerChoice, computerChoice);
    readOut.textContent = round;
    console.log(round)

    let endGame;
    if (rounds === 6) {
        rounds = 5
     if (humanScore === computerScore) {
      endGame = 'The game is a draw! try again!'
      }
         
      if (humanScore > computerScore) {
       endGame = 'congratulations! You Win!';
      }

       if (humanScore < computerScore) {
        
        endGame = 'The computer won this one. try again!';
      }
      readOut.textContent = endGame

      setTimeout(() => {
      if (confirm('Game over! Do you want to play again?')) {
        resetGame();
      }
      }, 1500);
    } 

    numberOfRounds.textContent = `Round ${rounds}!`;
    yourScore.textContent = `${humanScore}`;
    yourChoice.textContent = `${playerChoice}`
    compScore.textContent = ` ${computerScore}`;
    compsChoice.textContent = `${computerChoice}`
  return endGame;
 }

//  playGame();
 
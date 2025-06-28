const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// rock.addEventListener('click', function()  {
//   playRound("rock", computerChoice)
// });
// paper.addEventListener('click', function() {
//   playRound("paper", computerChoice)
// });
// scissors.addEventListener('click', function() {
//   playRound("scissors", computerChoice)
// });


let playerChoice = ''; 

const buttons = document.querySelectorAll('.game-buttons');

 buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    playerChoice = button.textContent.toLocaleLowerCase();
    playGame(); 
    console.log(playerChoice)
    // document.getElementById('output').textContent = `You picked: ${playerChoice}`;
  });
});

// Computer choice logic

let computerChoice = getComputerChoice();

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
     const compScore = document.getElementById('computer-score');


 function playRound(human, computer) {
     let thisRound;
 console.log(human, computer)
     if (human === computer) {
     thisRound = alert('Draw! Try again.')
     } else if (human === 'rock') {
     thisRound = rockChoice(human, computer);
     } else if (human === 'paper') {
     thisRound = paperChoice(human, computer);
     } else if (human === 'scissors') {
     thisRound = scissorsChoice(human, computer)
     } 
     rounds ++;
     return thisRound
     console.log(thisRound)
 } 
  
 function rockChoice(human, computer){
     let result 
     if (computer === 'paper'){
         computerScore++
        //  alert('Paper beats Rock!') 
     } else {
         humanScore++
        //  alert('Rock beats Scissors!')
         console.log(humanScore)
     }
 }
 
 function paperChoice(human, computer) {
     if (computer === 'scissors'){
         computerScore++
        //  alert('Scissors beats Paper!')
     } else {
         humanScore++
        //  alert('Paper beats Rock!')
     }
 }
 
 function scissorsChoice(human, computer) {
     if (computer === 'rock'){
         computerScore++
        //  alert('Rock beats Scissors!')
     } else {
         humanScore++
        //  alert('Scissors beats Paper!')
     }
 }
 
 
 //Play game
 function playGame() { 
     let result;
     playRound(playerChoice, computerChoice)
     if (rounds > 5) {
        playRound(playerChoice, computerChoice)
     }
     if (rounds === 5) {
        if (humanScore > computerScore) {
         result = prompt('congratulations! You Win!')
         } else if (humanScore < computerScore) {
         result = alert('The computer won this one. try again!')
         } else (humanScore === computerScore) 
         result = alert('The computer won this one. try again!')
 }
         
         numberOfRounds.textContent = `Round ${rounds}!`;
         yourScore.textContent = `You: ${humanScore}`;
         compScore.textContent = `Computer: ${computerScore}`;
     return result;
   } 
 
//  playGame();
 
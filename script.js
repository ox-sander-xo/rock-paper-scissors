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
 };
 
 
 // Player Choice Logic
 
 function getHumanChoice(){
     let question = prompt('Make your move!')
     return question.toLowerCase()
 };
 
 
 //Play round 
 
 let rounds = 0;
 let computerScore = 0;
 let humanScore = 0;
 
 function playRound(human, computer) {
     let thisRound;
 
     if (human === computer) {
     thisRound = alert('Draw! Try again.')
     } else if (human === 'rock') {
     thisRound = rockChoice(human, computer);
     } else if (human === 'paper') {
     thisRound = paperChoice(human, computer);
     } else if (human === 'scissors') {
     thisRound = scissorsChoice(human, computer)
     } 
     rounds += 1;
     return thisRound
 } 
  
 function rockChoice(human, computer){
     let result 
     if (computer === 'paper'){
         computerScore++
         alert('Paper beats Rock!') 
     } else {
         humanScore++
         alert('Rock beats Scissors!')
     }
 }
 
 function paperChoice(human, computer) {
     if (computer === 'scissors'){
         computerScore++
         alert('Scissors beats Paper!')
     } else {
         humanScore++
         alert('Paper beats Rock!')
     }
 }
 
 function scissorsChoice(human, computer) {
     if (computer === 'rock'){
         computerScore++
         alert('Rock beats Scissors!')
     } else {
         humanScore++
         alert('Scissors beats Paper!')
     }
 }
 
 
 //Play game
 function playGame() { 
     let result;
 
     while (rounds < 5){
       let computerChoice = getComputerChoice();
       let humanChoice = getHumanChoice();
       console.log(computerChoice)
       console.log(humanChoice)
       console.log(rounds)
       playRound(humanChoice, computerChoice)
     }
     
     if (humanScore > computerScore){
         result = alert('congratulations! You Win!')
         } else if (humanScore < computerScore) {
         result = alert('The computer won this one. try again!')
         }
 
     console.log(rounds)
     console.log(`Computer's score is ${computerScore}`)
     console.log(`Your score is ${humanScore}`)
     
   
     return result;
   } 
 
 playGame();
 
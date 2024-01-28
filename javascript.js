let computerScore = 0;
let playerScore = 0;
let maxScore = 2;
let introMessage = 'Select your hand: Rock, Paper or Scissors';

function getComputerChoice(){
  let choice = '';
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
  } 
  switch (getRandomNumber(3)) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'scissors';
      break;
    case 2:
      choice = 'paper';
      break;
    default:
      choice = 'error selecting hand';
      break;
  }
  console.log(`Computer choice is ${choice}`); 
  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt(introMessage);
  console.log(`Player's choice is ${playerChoice}`);
  return playerChoice.toLocaleLowerCase();
}


function checkWinner(playerChoice, computerChoice){
  let winner = '';
  if (playerChoice ==='rock') {
    if (computerChoice === 'rock') {
      winner = 'tie';
    } else if (computerChoice === 'paper') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      winner = 'player';
    } else if (computerChoice === 'paper') {
      winner = 'tie';
    } else {
      winner = 'computer';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winner = 'computer';
    } else if (computerChoice === 'paper') {
      winner = 'player';
    } else {
      winner = 'tie';
    }
  }
  return winner;
}

function checkScore() {
  let message = '';
  if (computerScore == maxScore) {
    message =`Match WINNER Computer won with a score of ${computerScore}`;
    console.log(message);
  } else if (playerScore == maxScore) {
    message = `Match WINNER Player won with a score of ${playerScore}`;
    console.log(message);
  } else {
    message = 'continue';
    console.log(message);
  }
}

function game() {
  while ((playerScore < maxScore) && (computerScore < maxScore)) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (checkWinner(playerChoice,computerChoice) === 'player') {
      playerScore++;
      console.log(`player score ${playerScore}`);
      checkScore();
    } else if (checkWinner(playerChoice,computerChoice) === 'computer') {
      computerScore++;
      console.log(`computer score ${computerScore}`);
      checkScore();
      
    } else {
      console.log('tie! Rematch!');
    }
  }
  return reset();
}

function reset() {
  computerScore = 0;
  playerScore = 0;
  maxScore = 2;
  return 'new game';
}


let n = 0;
while (n<3) {
  console.log(n);
  n++;
}
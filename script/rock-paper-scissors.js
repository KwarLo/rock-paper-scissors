
const score = JSON.parse(localStorage.getItem('score'));

function playGame(playerMove) {

  const computerMove = selectComputerMove();
  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie.'
    } else if(computerMove === 'paper') {
      result = 'You Lose.';
    } else if(computerMove === 'scissors') {
      result = 'You Win.';
    }

  } else if(playerMove === 'paper') {
    if(computerMove === 'paper') {
      result = 'Tie.'
    } else if(computerMove === 'scissors') {
      result = 'You Lose.';
    } else if(computerMove === 'rock') {
      result = 'You Win.';
    }

  } else if(playerMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'Tie.'
    } else if(computerMove === 'paper') {
      result = 'You Lose.';
    } else if(computerMove === 'scissors') {
      result = 'You Win.';
    }

  }

  if(result === 'You Win.') {
    score.wins++;
  } else if(result === 'You Lose.') {
    score.losses++;
  } else if(result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  
    alert(`You selected: ${playerMove}. Computer Selected: ${computerMove}. Results: ${result}
 Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
}

function selectComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
} 
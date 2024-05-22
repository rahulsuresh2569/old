let outputScore = localStorage.getItem('score');
let score = JSON.parse(outputScore);



if (score===null) {
  score = {
    wins : 0,
    losses : 0,
    tie : 0
  };
}
updateScoreElement();

function pickComputerMove(rNumber) {
  if (rNumber >=0 && rNumber < (1/3)) {
    return 'rock';
  } else if (rNumber >=(1/3) && rNumber < (2/3)) {
    return 'paper';
  } else if (rNumber >=(2/3) && rNumber < 1) {
    return 'scissors';
  }  
}

function playGame(playerMove) {
  const rNumber = Math.random();
  const cMove = pickComputerMove(rNumber);
  let result;

  if (cMove === playerMove) {
    result = 'Tie';
    showResultElement('Tie');
    score.tie+=1;
  } else if ((cMove === 'rock' && playerMove==='paper') || (cMove === 'paper' && playerMove==='scissors') || (cMove === 'scissors' && playerMove==='rock')) {
    result = 'You win';
    showResultElement('You win');
    score.wins+=1;
  } else {
    result = 'You lose';
    showResultElement('You lose');
     score.losses+=1;
  }

  const scoreString = JSON.stringify(score);
  localStorage.setItem('score',scoreString);


  updateScoreElement();
  showMovesElement(playerMove,cMove); 
  
}

function showResultElement(userPick) {
  document.querySelector('.js-pick')
    .innerHTML =  userPick;       
}

function showMovesElement(userMove,computerMove) {
  document.querySelector('.js-moves')
    .innerHTML =  `You
       <img class="move-icon" src="images/${userMove}-emoji.png">
       <img class="move-icon" src="images/${computerMove}-emoji.png">
        Computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}, Tie: ${score.tie}`;
}

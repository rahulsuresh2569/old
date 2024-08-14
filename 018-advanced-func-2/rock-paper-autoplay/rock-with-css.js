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

let isAutoPlaying = false;
let intervalId;
const autoplayElement = document.querySelector('.js-autoplay-button') 
autoplayElement.addEventListener('click', () => autoplay())

function autoplay() {
  if (!isAutoPlaying) {
    autoplayElement.innerHTML = 'Stop Playing'    
    intervalId = setInterval( () => {
      let botMove = pickComputerMove(Math.random());
      playGame(botMove)  ;
    } , 1000);
    isAutoPlaying = true;
  } else {
    autoplayElement.innerHTML = 'Autoplay'
    isAutoPlaying = false
    clearInterval(intervalId)
  }
}

document.querySelector('.js-reset-button')
  .addEventListener('click', () => resetScore())

let attentionElement = document.querySelector('.js-attention-div');

function resetScore() {  
  let htmlcode
  htmlcode = 
  `
    <div>
      <p>Are you sure you want to reset the score?</p>
      <button class="yes-button js-yes-button">Yes</button>
      <button class="no-button js-no-button">No</button>
    </div>
  `
  attentionElement.innerHTML = htmlcode
  
  document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
      score.wins=0;
      score.losses=0;
      score.tie=0;
      localStorage.removeItem('score')
      updateScoreElement();
      attentionElement.innerHTML =''
    })
  
  document.querySelector('.js-no-button')
    .addEventListener('click', () => {
      attentionElement.innerHTML=''
    })
}


function playGame(playerMove) {
  const rNumber = Math.random();
  const cMove = pickComputerMove(rNumber);
  let result;

  if (cMove === playerMove) {
    result = 'Tie';
    showResultElement('Tie');
    score.tie+=1;
  } else if ((cMove === 'rock' && playerMove==='paper') || (cMove === 'paper' &&              playerMove==='scissors') || (cMove === 'scissors' && playerMove==='rock')) {
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

document.querySelector('.js-rock-button')
  .addEventListener('click',() => {
    playGame('rock')
  })
  
document.querySelector('.js-paper-button')
  .addEventListener('click',() => {
    playGame('paper')
  })

document.querySelector('.js-scissors-button')
  .addEventListener('click',() => {
    playGame('scissors')
  })


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock')
  } else if (event.key === 'p') {
    playGame('paper')
  } else if (event.key === 's') {
    playGame('scissors')
  } else if (event.key === 'a') {
    autoplay()
  } else if (event.key === 'Backspace') {
    resetScore()
  }
})

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

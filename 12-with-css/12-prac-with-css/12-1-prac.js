function checkSubscribe() {
  let buttonElement = document.querySelector('.js-subscribe-button')
  .innerText
  console.log (buttonElement);
  if (buttonElement==='Subscribe') {
    document.querySelector('.js-subscribe-button')
      .innerHTML = 'Subscribed'
    document.querySelector('.js-subscribe-button')
      .classList.add('subscribed-button')
    } else {
      document.querySelector('.js-subscribe-button')
        .innerHTML = 'Subscribe';
      document.querySelector('.js-subscribe-button')
        .classList.remove('subscribed-button')
  }
}

// console.log (document.querySelector('.js-button').classList.contains('js-button'));

function checkClicked(buttonName) {
  let buttonElement = document.querySelector(buttonName);
  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled')
    
  } else {  
    turnOffPrevious()
    buttonElement.classList.add('is-toggled')
  }
}

function turnOffPrevious() {
  const previousButtonElement = document.querySelector('.is-toggled');
  if (previousButtonElement) {
    previousButtonElement.classList.remove('is-toggled')
  }
}

function submitonEnter(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const costInputElement = document.querySelector('.js-cost-input').value;
  let cost = Number(costInputElement) *100;
  let outputTextElement=document.querySelector('.js-output-text');
  if (cost<4000 && cost>0) {
    removeErrorMessage()
    outputTextElement.innerHTML = `$${(cost+1000)/100}`;

  } else if (cost>=4000) {
    removeErrorMessage()
    outputTextElement.innerHTML = `$${cost/100}`;

  } else {
    outputTextElement.innerHTML = `Error: Cost cannot be less that $0`;
    outputTextElement.classList.add('error-message')
  }
}
function removeErrorMessage() {
  const errorElement = document.querySelector('.error-message')
  if (errorElement) {
    errorElement.classList.remove('error-message')
  }
}
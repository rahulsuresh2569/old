let sum ;
let clearNextNum=true;
if (sum === null) {
  sum='';
} else {
  sum = localStorage.getItem('sum')
}
showOutput(sum)



 function calculate(elem) {
  if (!clearNextNum) {
    sum += elem
    
    showOutput(sum)  
  } else {
    sum=elem;
    
    showOutput(sum)  
  }
}

function updateSum(sum) {
  
  showOutput(sum)
  localStorage.setItem('sum',sum);
}

function showOutput(sum) {
  document.querySelector('.js-output')
    .innerHTML = sum;
}
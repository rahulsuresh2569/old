const add = function() {
  console.log(2+3)
}
add()
add()

function runTwice (fun) {
  fun()
  fun()
}
runTwice (() => {console.log('12b')})
runTwice (add)

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    const buttonElement = document.querySelector('.js-start-button')
    textInsideButton = buttonElement.innerHTML

    buttonElement.innerHTML = 'Loading...'
    if (textInsideButton === 'Start') {
      setTimeout(() => {
        buttonElement.innerHTML = 'Finished'
      } ,1000)
    }
  })



let addButtonTimeout;

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    const paraElement=document.querySelector('.added-text')
    console.log('hi')
    clearTimeout(addButtonTimeout)
    paraElement.innerHTML='Added'
    addButtonTimeout = setTimeout(() => {
    paraElement.innerHTML=''
    },2000)
  })


document.querySelector('.js-add2-button')
  .addEventListener('click', () => messages++)
  
document.querySelector('.js-remove-button')
  .addEventListener('click', () => messages--)


  
let messages = 2;
let titleChangeId;
if (messages>0) {
  titleChangeId = setInterval(() => {
    if (document.title === 'App' && messages>0) {
      document.title = `(${messages}) New messages`
    } else {
      document.title = 'App'
    }
  },1000)
} else {
  clearInterval(titleChangeId)
  document.title = 'App'
}



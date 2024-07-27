let taskArray = [];



function renderTask() {
  let htmlCode = ''
  for (let i = 0; i < taskArray.length; i++) {
    const taskValue = taskArray[i]
    const html = `<p>${taskValue}</p>`
    htmlCode += html
  }
  console.log(htmlCode)
  document.querySelector('.add-html').innerHTML = htmlCode;
}






function addTask() {
  let taskElement = document.querySelector('.input-task');
  const taskName = taskElement.value;
  if (taskName){
    raiseError(false)
    taskArray.push(taskName)
    console.log(taskArray)
    renderTask()
    taskElement.value = ''
  } else {
    raiseError(true)
  }
}

function raiseError(truthValue) {
  let errorElement = document.querySelector('.error')
  if (truthValue) {
    errorElement.innerHTML = 'Error: Enter a valid input'
  } else {
    errorElement.innerHTML = ''
  }
} 


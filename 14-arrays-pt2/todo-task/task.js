let taskArray = [];



function renderTask() {
  let htmlCode = ''
  for (let i = 0; i < taskArray.length; i++) {
    const taskValue = taskArray[i]
    const { taskName,taskDate } = taskValue
    const html = 
    `
      <div>${taskName}</div>
      <div>${taskDate}</div>
      <button class="delete-button" onclick ="
        taskArray.splice(${i},1)
        renderTask()          
      ">Delete</button>
    `
    htmlCode += html
  }
  console.log(htmlCode)
  document.querySelector('.js-add-html').innerHTML = htmlCode;
}






function addTask() {
  let taskElement = document.querySelector('.input-task');
  const taskName = taskElement.value;
  const dateElement = document.querySelector('.js-date')
  const taskDate = dateElement.value
  if (taskName && taskDate){
    raiseError(false)
    taskArray.push({taskName,taskDate})
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



let taskArray = JSON.parse(localStorage.getItem('taskArray'));
if (taskArray===null) {
  taskArray = []
} else {
  renderTask()
}
console.log(taskArray)

function renderTask() {
  jsonArray = JSON.stringify(taskArray)
  localStorage.setItem('taskArray',jsonArray)
  let htmlCode = ''
  console.log(taskArray)

  taskArray.forEach(function(taskValue, i){
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
  })
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


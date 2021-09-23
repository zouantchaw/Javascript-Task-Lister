let input = document.getElementById("new-task-description");
let submitButton = document.getElementById("submit-button");
let form = document.getElementById("create-task-form")
let list = document.getElementById("list")

function addTask(task) {
  console.log(task)
  if (input.value === "") {
    console.log("empty string")
  } 
  let tasks = document.getElementById("tasks")
  let li = document.createElement('li')
  let deleteButton = document.createElement("button")

  deleteButton.innerHTML = "X"
  li.appendChild(document.createTextNode(task));
  li.appendChild(deleteButton)
  li.id = Math.random()
  deleteButton.onclick = function(event) {
    console.log("Delete button clicked")
    deleteTask(li.id)
  }
  console.log(li.id)
  tasks.appendChild(li);

  console.log("Task Added")
  input.value = ''
  console.log(li.childNodes)
}

function deleteTask(id) {
  console.log("Inside deleteTask function")
  console.log(id)
  let task = document.getElementById(id)
  task.remove()
  console.log(`Task: ${id} removed from list`)
}

form.addEventListener('submit', function(event){
  console.log("Submit Clicked");
  addTask(input.value + " ")
  event.preventDefault();
} )



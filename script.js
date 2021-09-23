let input = document.getElementById("new-task-description");
let submitButton = document.getElementById("submit-button");
let form = document.getElementById("create-task-form")
let list = document.getElementById("list")

let emptyInput = function() {
  if (input.value === "") {
    return true
  }
}

function addTask(task) {
  console.log(task)
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
  // If input is empty
  // display alert message
  if (emptyInput) {
    console.log("empty field")
    alert("Cannot leave field empty")
    event.preventDefault();
  }else{
    addTask(input.value + " ")
    event.preventDefault();
  }
} )



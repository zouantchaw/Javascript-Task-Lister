let input = document.getElementById("new-task-description");
let submitButton = document.getElementById("submit-button");
let form = document.getElementById("create-task-form")
let list = document.getElementById("list")
let priority = function() {
  return document.getElementById("priority").value
}

function dropdownChanged() {
  console.log(priority())
}

document.getElementById("priority").onchange = dropdownChanged


let emptyInput = function() {
  if (input.value === "") {
    return true
  } else {
    return false
  }
}

let changeTextColor = function(priority) {
  if (priority === "high") {
    return "red"
  } else if (priority === "meduim") {
    return "yellow"
  } else if (priority === "low") {
    return "green"
  }
}

function addTask(task, priority) {
  console.log(task)
  console.log(priority)
  let tasks = document.getElementById("tasks")
  let li = document.createElement('li')
  let deleteButton = document.createElement("button")

  deleteButton.innerHTML = "X"
  li.appendChild(document.createTextNode(task));
  li.style.color = changeTextColor(priority())
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
  console.log(priority())
  // If input is empty
  // display alert message
  console.log(emptyInput())
  if (emptyInput()) {
    console.log("empty field")
    alert("Cannot leave field empty")
    event.preventDefault();
  }else{
    addTask(input.value + " ", priority)
    event.preventDefault();
  }
} )



//select the button

var mkList = function (taskName, dueDate, priority){
//create <li></li>
var liElem = document.createElement("li");

//<li>a class - due date </li>
liElem.textContent = `${taskName} - ${dueDate}`;

// <li class="list-group-item">a task - due date<li>
liElem.classList.add('list-group-item');
return (liElem);
}

var addBtn = document.querySelector('#addBtn');
addBtn.addEventListener(
'click',
function(){
var taskElem = document.querySelector('#task');
var dueDateElem = document.querySelector('#due-date');
var priorityElem = document.querySelector('#priority');
var todoElem = mkList(taskElem.nodeValue, dueDateElem.value, priorityElem.value)
var todoListElem =document. querySelector('#todo-list');
todoListElem.appendChild(todoElem);
taskElem.value = null;
dueDateElem.value = null;
priorityElem.value = null;

}
)
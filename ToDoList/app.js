const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
    e.preventDefault();

    if(todoInput.value != '') {
        const todoDiv = document.createElement('div');   //Create div
        todoDiv.classList.add('todo');
            
        const todoLi = document.createElement('li');    //Create Li 
        todoLi.innerText = todoInput.value;
        todoLi.classList.add('todo-item');
        todoDiv.appendChild(todoLi);

        const deleteButton = document.createElement('button');    //Create Delete Button
        deleteButton.innerHTML = 'DELETE';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);
 
        todoList.appendChild(todoDiv);   //Append to div

        todoInput.value = '';    //clear input value
    }
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}
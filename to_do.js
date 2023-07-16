// Select elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// Add event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const todoText = input.value.trim(); // Remove leading/trailing whitespace

  if (todoText !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    const todoItem = document.createElement('span');
    const deleteBtn = document.createElement('button');

    todoItem.textContent = todoText;
    deleteBtn.textContent = 'Delete';

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function() {
      listItem.remove();
    });

    listItem.appendChild(todoItem);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    // Clear the input field
    input.value = '';
  }
});

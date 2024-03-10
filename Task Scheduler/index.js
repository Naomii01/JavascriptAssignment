const actions = require('./controllers/actions');

var newTask = {
    title: 'Presentation',
    completed: false,
    dueDate: '2024-03-07T09:31:20.691Z',
}

// Function to add a task 
// actions.addTask({
//     title: 'Presentation',
//     completed: false,
//     dueDate: '2024-03-07T09:31:20.691Z',
// });

// Function to display sorted tasks by the due date 
// actions.displayTasks();

// Function to update a task.
// actions.updateTask(1, "dueDate", "2024-03-07T07:00:00.691Z");

// actions.removeTask(2);


// Demo on how to use sort array built in functionality. 
var numbers = [1, 4, 5, 2, 3, 7];

var sortedNumbers = numbers.sort((x,y) => x - y);
console.log(sortedNumbers);


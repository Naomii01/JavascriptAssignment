var tasks = require('../database/db');

function addTask(t) {
    t.id = tasks.length + 1;
    tasks.push(t);
    console.log(tasks);
}

function displayTasks() {
    var sortedTasks = tasks.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
    console.log(sortedTasks);
};

function updateTask(id, key, value) {
    var foundTask = tasks.find(task => task.id === id);
    if (!foundTask) {
        console.log('Task not found');
    }
    if (key === 'title') {
        foundTask.title = value;
    } else if (key === 'completed') {
        foundTask.completed = value;
    } else if (key === 'dueDate') {
        foundTask.dueDate = value;
    }
    console.log(tasks);
}

function removeTask(id) {
    var remainingTasks = tasks.filter(task => task.id !== id);
    console.log(remainingTasks);
};

module.exports = {
    addTask,
    removeTask,
    displayTasks,
    updateTask
}



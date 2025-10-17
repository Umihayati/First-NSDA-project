let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function showTasks() {
    console.log("\nMy Tasks:");
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        for (let i = 0; i < tasks.length; i++) {
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}
// test the function using many tasks
addTask("Do homework");
addTask("Clean the room");
addTask("Study JavaScript");
addTask("Go for a walk");

showTasks();
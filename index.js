#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
// assuem as a shopper// aik se zada condition chalata hai else bs aik condition chalata hai..
while (condition) {
    let answer = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "select one operater",
        choices: ["add", "update", "read", "delete"],
    });
    if (answer.select === "add") {
        let addTodo = await inquirer.prompt([
            {
                name: "add",
                message: "what would you like to add your todo?",
                type: "input",
            },
            {
                name: "retry",
                type: "confirm",
                message: "would you like to add more your todos?",
                default: "false",
            },
        ]);
        todos.push(addTodo.add);
        console.log(todos);
        condition = addTodo.retry;
    }
    ;
    if (answer.select === "update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "select item for update?",
            name: "todo",
            choices: todos.map(item => item),
        });
        let addTodo = await inquirer.prompt({
            name: "add",
            message: "would you like to add your todo",
            type: "input",
        });
        let newTodos = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodos, addTodo.add];
        console.log(todos);
    }
    ;
    if (answer.select === "read") {
        console.log(todos);
    }
    ;
    if (answer.select === "delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "select item for update?",
            name: "todo",
            choices: todos.map(item => item),
        });
        let newTodos = todos.filter(val => val !== deleteTodo.todo);
        todos = [...todos];
        console.log(todos);
    }
    ;
}
;

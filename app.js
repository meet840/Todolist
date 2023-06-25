//while loop where the input is not equal to quit we just keep loopoing 
//make sure to mak quit part to work
//storage of todo will be done using an array 
//ther will be conditional inside the loop. if input is equal to quit 
//if list is the command then it will iterate over the array to print the list. Index should be there in the list
//to remove the list from the list. Splice with the index of the list to be removed.

let input = prompt("what will you like to do")
const todos = ["Collect chicken eggs"]

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("********************************")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        } 
        console.log("********************************")
    } else if (input === "new"){
        const newTodo = prompt("What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Enter the index you would to delete"));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} removed from the list`);
        } else {
            console.log("Unknown Index");
        }
    }
    input = prompt("what will you like to do")
}
console.log("YOU QUIT THE APP")


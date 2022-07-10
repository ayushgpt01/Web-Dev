let command = prompt("What would you like to do?");
const list = [];
while (command !== "quit") {
  if (command === "new") {
    list.push(prompt("Enter a task in ToDo List"));
    console.log("Item added to list");
  } else if (command === "list") {
    console.log("**********************");
    for (let i = 0; i < list.length; i++) {
      console.log(i, list[i]);
    }
    console.log("**********************");
  } else if (command === "delete") {
    list.splice(prompt("Enter index of ToDo to delete"), 1);
    console.log("Item deleted");
  }
  command = prompt("What would you like to do?");
  if (command === "quit") {
    console.log("Quitting App");
  }
}

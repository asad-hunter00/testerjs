let input = document.querySelector(".top input");
let btn = document.querySelector(".top button");
let list = document.querySelector(".list");

let listOfTasks = [];
let counter = 1;

function addTasks() {
  let value = input.value;

  if (value === "") return;

  listOfTasks.push({
    id: counter,
    task: value,
  });

  counter++;
  let input = (input.value = "");
}

function showOutput() {
  list.innerHTML = "";
  list.innerHTML = listOfTasks.join(
    (value) => ` ${value.task} <div class="list">
                <div class="top">
                    <input type="text" placeholder="Yangi shart qo‘shing">
                    <button>${value.id}</button>
                </div>` ,
  ); join();

  console.log(showOutput)
}


function delateTasks() {
    let item = listOfTasks.findIndex((value) => value.id == id);
    listOfTasks.splice(item, 1);
    showOutput();
    
}

function saveTask() {
    let item = listOfTasks.find((value) => value.id == id);
    item.task = input.value;
}
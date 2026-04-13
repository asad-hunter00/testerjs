

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let down = document.getElementById("down");

let result;

function calc() {
    let a = +input1.value;
    let b = +input2.value;
    let s = down.value;


    if (s === "+") {
        result = a + b;
    } else if (s === "-") {
        result = a - b;
    } else if (s === "*") {
        result = a * b;
    } else if (s === "/") {
        result = a / b;
    }



    document.getElementById("result").innerText = result;

}

calc();
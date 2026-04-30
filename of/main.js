let input = document.getElementById("input");
let list = document.getElementById("list");

function Add() {
    let value = input.value;

    if (!value) return;

    let data = JSON.parse(localStorage.getItem("data"));

    data.push(value);

    localStorage.setItem("data", JSON.stringify(data));

    input.value = "";
}

function ShowOutput() {
    let data = JSON.parse(localStorage.getItem("data"));

    list.innerHTML = data
}

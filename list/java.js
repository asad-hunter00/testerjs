

let input = document.querySelector(".top input")
let btn = document.querySelector(".top button")
let list = document.querySelector(".list")


btn.onclick = function () {
    let value = input.value;

    if (value === "") return;



    let div = document.createElement("div")

    div.className = "task";
    div.innerHTML = `<div class="left">
    <input type="checkbox">
    <span>${value}</span>
</div>
<span class="delete">×</span>`;

    list.appendChild(div)

    input.value = ""

};

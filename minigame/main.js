
let btn = document.getElementById("btn")


btn.onmouseover = function () {
    let x = Math.random() * 300;
    let y = Math.random() * 300;

    btn.style.left = x + "px";
    btn.style.top = y + "px";

}


btn.onclick = function () {
    alert("yutdingiz");
};

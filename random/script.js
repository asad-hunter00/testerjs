let a = document.getElementById("input");
let result = document.getElementById("result");

function random() {
  result.innerHTML = "";

  for (let i = 0; i < a; i++) {
    let r = Math.floor(Math.random() * number.length);
  }
}

random();

// let a = document.getElementById("input");
// let result = document.getElementById("result");

// function random() {
//   result.innerHTML = "";

//   for (let i = 0; i < a; i++) {
//     let r = Math.floor(Math.random() * number.length);
//   }
// }

// random();

function genearetNum() {

  let num = Math.trunc(Math.random * 10000000)

  return `+99891${num.toString().padEnd(7, 0)}`;
  

 
}

console.log(genearetNum());




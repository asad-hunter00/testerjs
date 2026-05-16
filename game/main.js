let timeEl = document.getElementById("time");
let timeEll = document.getElementById("timee")
let timeElll = document.getElementById("timeee");
let result = document.getElementById("result")

let d = new Date();

setInterval(() => {
  console.log(d.getMinutes());
  timeEll.innerHTML = d.getHours();
  timeEl.innerHTML = d.getMinutes();
}, 1000);


let ball = Number(prompt("balingizni kiriting:"));

let davomat = Number(prompt("Davomat foizini kiriting:"));

let olimpiada = prompt("Olimpiadada yutganmisiz? ha/yo'q");

if (ball >= 60 && davomat >= 70) {
  console.log("Siz keyingi bosqichga o'tdingiz");
} else if (ball < 60 && davomat < 70 && olimpiada === "ha") {
  console.log("siz chempion bo'lganingiz uchun keyingi bosqichga o'tdingiz");
} else {
  console.log("Siz keyingi bosqichga o'tmadingiz");
}

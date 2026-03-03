var gen = prompt("What is your gender male/woman?");

var age = prompt("What is your age?");
var go = prompt("Siz oldin armiyaga borganmisiz? ha/yo'q?");



if (gen == "male " && age >= 18 && go == "ha") {
    console.log("Siz armiyaga borishingiz mumkin")
}   


else if (gen == "woman" && age >= 18 && go == "yo'q") {
    console.log("siz armiyaga borish mumkin emas")
}   

else (gen == "male" && age >= 18 && go == "yo'q") {
    console.log("Sizga ruhsat yo'q")
}
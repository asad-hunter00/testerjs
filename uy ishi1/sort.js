


var students = [
    { name: "Ali", score: 85 },
    { name: "Zafar", score: 92 },
    { name: "Sardor", score: 85 },
    { name: "Bobur", score: 70 }
];


let name = prompt("qaysi boyicha sort qilasiz name/score");


if (name === "name") {
    students.sort((a, b) => a.name.(b.name))
}   else if (name === "score") {
     name.sort((a, b) => a.score - b.score);
}  else {
    console.log("notogri yozdingiz")

}


console.log(students);




// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }

// i = 0;
// while (i < 20) {
//     console.log(i);
//     i++;

// }

// let i = 0;

// do {
//     console.log("hi world");
//     i++;

// } while (i < 10);

// let code = {
//     name: saloh,
//     age: 13,
//     hobby: code,
//     cars: bmw
// }

// for (const i in code) {
//     if ()) continue;

//     const element = object[i];

// }




var cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;

for (const i in cars) {
  if (i == 2) {
    continue;
  }

  console.log(cars[i]);
}

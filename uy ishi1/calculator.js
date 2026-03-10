let var1 = +prompt("Birinchi sonni kiriting");
let var2 = +prompt("Ikkinchi sonni kiriting");
let op = prompt("Amalni kiriting: +, -, *, /");
let result;

switch (op) {
  case "+":
    result = var1 + var2;
    break;
  case "-":
    result = var1 - var2;
    break;
  case "*":
    result = var1 * var2;
    break;
  case "/":
    result = var1 / var2;
    break;
  default:
    result = "Noto'g'ri amal"; // Added quotes around the error message
}

console.log(result);

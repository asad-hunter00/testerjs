function calc() {
    let str = prompt("misol kirgazing")

    let arr = str.split(" ")

    let a = Number(arr[0])
    let op = arr[1]


    let b = Number(arr[2])

    if (op === "+") {
        
        console.log(a + b)
    } else if (op === "-") {
        console.log(a - b)

    } else if (op === "*") {
        console.log(a * b)
    } else if (op === "/") {
        console.log(a / b)

    } else {
        console.log("sondan keyin joy tashlang")
    }
}
calc()
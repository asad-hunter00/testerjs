let sp = document.querySelectorAll(".sp")

button.onclick = function () {
    let a = ["tosh", "qaychi", "qog'oz"]

    let x = a[Math.floor(Math.random() * 3)]
    let y = a[Math.floor(Math.random() * 3)]

    sp[0].textContent = x
    sp[1].textContent = y

    if (x == y) result.textContent = "Draw"
    else if (
        (x == "tosh" && y == "qaychi") ||
        (x == "qaychi" && y == "qog'oz") ||
        (x == "qog'oz" && y == "tosh")
    ) result.textContent = "Win"
    else result.textContent = "Lose"
}

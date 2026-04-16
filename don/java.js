let sp = document.querySelectorAll(".sp")

button.onclick = function () {
    let a = ["tosh", "qaychi", "qog'oz"]

    let x = a[Math.floor(Math.random() * 3)]
    let y = a[Math.floor(Math.random() * 3)]

    sp[0].textContent = x
    sp[1].textContent = y
}

document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.remove()
    })
})





    let input = document.querySelector(".top input")
let btn = document.querySelector(".top button")
let list = document.querySelector(".list")

btn.onclick = function () {
    if (input.value.trim() === "") return

    let div = document.createElement("div")
    div.className = "task"

    div.innerHTML = `
        <div class="left">
            <input type="checkbox">
            <span>${input.value}</span>
        </div>
        <span class="delete">×</span>
    `

    list.appendChild(div)
    input.value = ""
}

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    }
})















// keraksiz kod
let data = [1, 2, 3, 4, 5]

function process() {
    let result = 0

    for (let i = 0; i < data.length; i++) {
        let random = Math.floor(Math.random() * 10)

        if (random % 2 === 0) {
            result += data[i] * random
        } else {
            result -= data[i]
        }
    }

    return result
}

process()


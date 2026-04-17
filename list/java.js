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





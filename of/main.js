// boshlang‘ich data
let data = {
    users: [
        {
            id: 1,
            name: "Ali",
            age: 18,
            todos: [
                { id: 1, text: "Dars", done: false },
                { id: 2, text: "Sport", done: true }
            ]
        },
        {
            id: 2,
            name: "Vali",
            age: 20,
            todos: [
                { id: 3, text: "Kitob", done: false },
                { id: 4, text: "Ish", done: true }
            ]
        },
        {
            id: 3,
            name: "Sardor",
            age: 19,
            todos: [
                { id: 5, text: "Kod yozish", done: false },
                { id: 6, text: "Video ko‘rish", done: true }
            ]
        }
    ]
};

let list = document.getElementById("list");

function Output() {
    let data = JSON.parse(localStorage.getItem("data")) || { users: [] };

    list.innerHTML = "";

    for (let i = 0; i < data.users.length; i++) {
        let user = data.users[i];

        let li = document.createElement("li");
        li.textContent = user.name + " (" + user.age + ")";

        list.appendChild(li);
    }
}

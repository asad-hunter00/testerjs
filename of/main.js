
let data = {
    users: [
        {
            id: 1,
            name: "Ali",
            age: 18,
            todos: [
                { id: 1, text: "lesson", done: false },
                { id: 2, text: "Sport", done: true }
            ]
        },
        {
            id: 2,
            name: "Vali",
            age: 20,
            todos: [
                { id: 3, text: "books", done: false },
                { id: 4, text: "work", done: true }
            ]
        },
        {
            id: 3,
            name: "Sardor",
            age: 19,
            todos: [
                { id: 5, text: "write code", done: false },
                { id: 6, text: "watch video", done: true }
            ]
        }
    ]
};

let list = document.getElementById("list");

function Output() {
    let data = JSON.parse(localStorage.getItem("data"));

    list.innerHTML = "";
    for (let i = 0; i < data.users.length; i++) {
        let user = data.users[i];

       let a =  document.createElement("li")

        a.textContent = "test";



    }


}


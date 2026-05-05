// let a = ["ewf", "qwqwdq", "wqdqwd", "qwdefg", "wewef"];
//  localStorage.removeItem(a)
// console.log(a)




let List = document.getElementById("list");
let Set = document.getElementById("set");
let Get = document.getElementById("get");
let Clear = document.getElementById("clear");
let Key = document.getElementById("key");
let Length = document.getElementById("length");
let inp = Document.getElementById("input").value


let ject = {
    name: "Asadbek",
    car: "porsche",
    old: 13,
    school: "yes",
    from: "Uzb"

}


function SetItem() {

    let inp = input.value;

    if (!value) return;

    input.localStorage.setItem("obj")

    list.innerHTML = `
    <div>${key}</div>
    `;
}

function GetItem() {

    let inp = input.value;

    if (!value) return;

    let  =  localStorage.getItem("name", "car", "old", "school", "from");

    list.innerHTML = `
    <div>${inp}</div>
    `;

 
}





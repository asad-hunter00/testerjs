let step = 0;

function chiqar() {
    let inputs = [
        document.getElementById("i1").value,
        document.getElementById("i2").value,
        document.getElementById("i3").value,
        document.getElementById("i4").value,
        document.getElementById("i5").value
    ];

    if (step < inputs.length) {
        let p = document.createElement("p");
        p.textContent = inputs[step];

        document.getElementById("natija").appendChild(p);

        step++;
    }
}
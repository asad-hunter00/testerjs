
setInterval(() => {
    let now = new Date();

    let time =
        now.getHours() + ":" +
        now.getMinutes() + ":" +
        now.getSeconds();

       document.getElementById("clock").innerHTML =
        "<span>" + time + "</span>";


        

}, 1000);
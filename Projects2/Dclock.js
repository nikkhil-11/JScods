const clock = document.getElementById('clock')

setInterval(function () {
    let myDate = new Date();
clock.innerHTML=(myDate.toLocaleTimeString());
}, 1000)
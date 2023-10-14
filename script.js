$(document).ready(function () {

    console.log("Welcome to the simple calculator!");

    let string = "";
    let input = document.querySelector("input");
    let button = document.querySelectorAll(".button");
    let clockStr;


    function updateTime() {
        const now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();

        if (hour > 12) {
            hour = hour - 12;
        }
        clockStr = hour + ":" + minute;

        if (hour < 10) {
            clockStr = "0" + hour + ":" + minute;
        }

        if (minute < 10) {
            clockStr = hour + ":" + "0" + minute;
        }
        time.innerText = clockStr;
    }

    updateTime();
    setInterval(updateTime, 1000);


    Array.from(button).forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
            }
            else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
            }
            else if (e.target.innerHTML == 'DEL') {
                string = input.value.slice(0, -1);
                input.value = string;
            }
            else {
                console.log(e.target);
                string = string + e.target.innerHTML;
                input.value = string;
            }
        })
    })

})

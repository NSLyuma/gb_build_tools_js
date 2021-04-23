import { zeroFirstFormat, formatError } from "./common.js";

const timeInput = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const stopSoundBtn = document.getElementById("stopSound");
const timeLeft = document.getElementById("timeLeft");
let timer = "";

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
    let timeArr = timeInput.value.split(":");
    let time = parseInt(timeArr[0]) * 3600 + parseInt(timeArr[1]) * 60;

    if (timeArr[0] === "")
        timeLeft.innerHTML = formatError("Введите время");
    else {
        timer = setInterval(function () {
            let hours = time / 3600 % 60;
            let minutes = time / 60 % 60;
            let seconds = time % 60;

            if (time < 0) {
                clearInterval(timer);
                let sound = new Audio("./media/sound.mp3");
                sound.play();
                stopSoundBtn.addEventListener("click", () => {
                    sound.pause();
                });
            } else {
                let showTime = `${zeroFirstFormat(Math.trunc(hours))}:${zeroFirstFormat(Math.trunc(minutes))}:${zeroFirstFormat(seconds)}`;
                timeLeft.innerHTML = showTime;
            }
            --time;
        }, 1000)
    }
}

function stopTimer() {
    clearInterval(timer);
}
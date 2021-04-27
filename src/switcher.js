const switcher = document.getElementById("switcher");
const dateCalcForm = document.getElementById("datecalc");
const timer = document.getElementById("timer");

if (timer.style.display === "none") {
    switcher.innerHTML = "Таймер";
} else {
    switcher.innerHTML = "Калькулятор дат";
}

switcher.addEventListener("click", switchSection);

function switchSection() {
    if (timer.style.display === "none") {
        dateCalcForm.style.display = "none";
        timer.style.display = "block";
        switcher.innerHTML = "Калькулятор дат";
    } else {
        timer.style.display = "none";
        dateCalcForm.style.display = "block";
        switcher.innerHTML = "Таймер";
    }
}
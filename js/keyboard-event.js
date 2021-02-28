// keydown
const press = document.getElementById("press");

press.addEventListener("keydown", change);

function change() {
    press.style.backgroundColor = "purple";
}

// keyup
const press1 = document.getElementById("press1");

press1.addEventListener("keydown", change);

function change() {
    press1.style.backgroundColor = "brown";
}

// keypress

const press2 = document.getElementById("press2");
const display = document.getElementById("display");

press2.addEventListener("keypress", check);

function check() {
    let message = press2.value;
    display.innerHTML = message;
}
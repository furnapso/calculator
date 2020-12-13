const calcScreen = document.querySelector("#screen");
document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', updateDisplay);
});

document.querySelector(".clear"),addEventListener('click', clear);

const operators = '÷×-+';

let output = 0;

function operate(operator, num1, num2) {
    switch (operator) {
        case  "+":
            return num1 + num2;
        case "/":
            return num1 / num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
    }
}

function clear() {
    calcScreen.textContent = "";
}

function updateDisplay() {
    let oldContent = calcScreen.textContent;
    calcScreen.textContent = oldContent + this.textContent;
}
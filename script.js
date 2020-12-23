const calcScreen = document.querySelector("#screen");
document.querySelectorAll("button").forEach(button => {
    if (button.classList.contains("clear")) {return}
    button.addEventListener('click', updateDisplay);
    button.addEventListener('click', calculate);
});

document.querySelector(".clear").addEventListener('click', clearDisplay);

const operators = '÷×-+';
const numbers = '1234567890'

function operate(operator, num1, num2) {
    switch (operator) {
        case  "+":
            return num1 + num2;
        case "÷":
            return num1 / num2;
        case "-":
            return num1 - num2;
        case "×":
            return num1 * num2;
    }
}

function clearDisplay() {
    calcScreen.textContent = "";
    output = 0;
    a = undefined;
    b = undefined;
    operator = undefined;
}

function updateDisplay() {
    let currentContent = calcScreen.textContent;
    let newContent = this.textContent;

    if (operators.includes(currentContent.slice(-1))) {

        if (operators.includes(newContent.slice(-1))) {
            return
        }

        else {
            b = newContent;

            calcScreen.textContent = currentContent + " " + newContent;
        }
    }

    else {
        if (operators.includes(newContent.slice(-1))) {
            calcScreen.textContent = currentContent + " " + newContent;
        }
        
        else {
            calcScreen.textContent = currentContent + newContent;
        }
    }

}

let output = 0;
let a;
let b;
let operator;

function calculate() {

    newValue = this.textContent;

    if (operators.includes(newValue)) {
        if (a == undefined) return;
        else operator = newValue;
    }

    else {
        newValue = parseInt(newValue);
        if (a == undefined) {
            a = newValue;
        }
        
        else if (operator != undefined) {
            b = newValue;
            output = operate(operator, a, b);
            a = output;
            b = undefined;
            operator = undefined;
        }
    }

    console.log(output);
}
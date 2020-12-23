const calcScreen = document.querySelector("#screen");
document.querySelectorAll("button").forEach(button => {
    if (button.classList.contains("clear")) {return}
    button.addEventListener('click', updateDisplay);
});

document.querySelector(".clear").addEventListener('click', clearDisplay);

const operators = '÷×-+';
const numbers = '1234567890'

let output = 0;

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
}

function updateDisplay() {
    let currentContent = calcScreen.textContent;
    let newContent = this.textContent;

    if (operators.includes(currentContent.slice(-1))) {
        if (operators.includes(newContent.slice(-1))) {
            return
        }

        else {
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
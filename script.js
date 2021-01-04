const calcScreen = document.querySelector("#screen");
document.querySelectorAll("button").forEach(button => {
    if (button.classList.contains("clear") || button.classList.contains("equals")) {return}
    button.addEventListener('click', updateDisplay);
});

document.querySelector(".clear").addEventListener('click', clearDisplay);
document.querySelector(".equals").addEventListener('click', calculate)

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
}

function updateDisplay() {
    let currentContent = calcScreen.textContent;
    let newContent = this.textContent;

    if (operators.includes(currentContent.slice(-1))) {

        if (operators.includes(newContent.slice(-1))) {
            return
        }

        else if (currentContent == "") {
            calcScreen.textContent = newContent;
        }

        else {
            calcScreen.textContent = currentContent + " " + newContent;
        }
    }

    else {
        if (operators.includes(newContent.slice(-1))) {
            if (currentContent.split(" ").length == 3) {
                calculate();
                currentContent = calcScreen.textContent;
            }

            calcScreen.textContent = currentContent + " " + newContent;
        }
        
        else {
            calcScreen.textContent = currentContent + newContent;
        }
    }

}

function calculate() {
    let result;
    let a;
    let b;
    expression = calcScreen.textContent.split(" ");
    if (expression.length >= 3 && expression.length % 2 != 0) {
        for (let i = 0; i < expression.length - 2; i += 2) {
            a = (a === undefined) ? parseInt(expression[i]) : result;
            operator = expression[i+1];
            b = parseInt(expression[i+2]);
            result = operate(operator, a, b);
        }

        calcScreen.textContent = result;
    }
}
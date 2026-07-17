let result = "0";
let resultArea = document.querySelector(".output-area");
let runningTotal = 0;
let previousOperator;



function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymble(value)
    }
    else {
        handleNumber(value)
    }

    rerender();
}

function handleNumber(number) {
    if (result === '0') {
        result = number;
    }
    else {
        result += number;
    }

}

function handleMath(number) {
    if (result === '0') {
        return;
    }

    const intResult = parseInt(result);
    if (runningTotal === 0) {
        runningTotal = intResult;
    }
    else {
        flushOperation(intResult);
    }

    previousOperator = number;
    result = "0";
}

function flushOperation(intResult) {
    if (previousOperator === "+") {
        runningTotal += intResult;
    }
    else if (previousOperator === "-") {
        runningTotal -= intResult;
    }
    else if (previousOperator === "÷") {
        runningTotal /= intResult;
    }
    else if (previousOperator === "×") {
        runningTotal *= intResult;
    }
}

function handleSymble(symble) {
    switch (symble) {
        case 'C':
            result = 0;
            break;

        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(result))
            result = "" + runningTotal;
            runningTotal = 0;
            break;
        case '«':
            if (result.length === 1) {
                result = '0';
                break;
            }
            else {
                result = result.substring(0, result.length - 1);
            }

        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symble);
            break;
    }

}


function init() {
    document
        .querySelector('.buttons')
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        })
}

function rerender() {
    resultArea.innerText = result
}

init();
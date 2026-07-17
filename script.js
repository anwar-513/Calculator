let result = "0";
let resultArea = document.querySelector(".output-area");


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

function handleSymble(symble) {
    switch (symble) {
        case 'C':
            result = 0;
            break;
            
        case '=':
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
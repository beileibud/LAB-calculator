
const buttons = document.querySelectorAll('.btn-number, .btn-op, .btn-zero, .btn-equals')
const result = document.querySelector('.result')
const equalsButton = document.querySelector('.btn-equals')
const clearButton = document.querySelector('.btn-clear')

let resultData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const buttonValue = button.getAttribute('data-num');
        resultData += buttonValue
        result.textContent = resultData;
    })
})

equalsButton.addEventListener('click', () => { 
    resultData=eval(resultData);
    result.textContent = resultData
})

clearButton.addEventListener('click', () => {

    resultData = "",
    result.textContent = resultData

})
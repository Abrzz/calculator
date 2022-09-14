/* TODO:

add string operations together
Add delete button
round decimal numbers to not overflow the screen

*/

let calculatorButtons = document.querySelectorAll(".calculator-btn");
let screen = document.querySelector(".screen")
let firstNumber =""
let operator =""
let decimalButton = document.getElementById("decimal")
let clearButton = document.getElementById("clear")
let zeroButton = document.querySelector(".zero-btn")

add = (a,b) => {
    result = (a+b)
    screen.textContent= result
}

substract = (a,b) => {
    result = (a-b)
    screen.textContent = result
}

multiply = (a,b) => {
    result = (a*b)
    screen.textContent = result
}

divide = (a,b) => {
    result = (a/b)
    screen.textContent = result
}
let addTextToScreen = (text) => {
    
    
    screen.textContent = screen.textContent + text
}
let cleanScreen = () => {

    decimalButton.disabled = false
    zeroButton.disabled = false
    screen.textContent = ""
}
let saveInputs = (currentChar) => {
    if (screen.textContent) firstNumber = Number(screen.textContent)
    operator = currentChar
    console.log(operator)
    cleanScreen()
}

let operate = (firstNumber,secondNumber,operator) => {
    if (operator == "+") add(firstNumber,secondNumber)
    else if (operator == "-") substract(firstNumber,secondNumber)
    else if (operator == "x") multiply(firstNumber,secondNumber)
    else divide(firstNumber,secondNumber)
}


calculatorButtons.forEach((e)=> e.addEventListener('click', (e) => {

    if (e.target.id == "sign") {saveInputs(e.target.textContent),decimalButton.disabled=false}
    else if(e.target.id == "equal-btn" && firstNumber!="" && operator!="") operate(firstNumber,Number(screen.textContent),operator)
    else if(e.target.id == "0" && !screen.textContent.includes(".")) {addTextToScreen(e.target.textContent);zeroButton.disabled = true}
    else if(e.target.id == "decimal") {decimalButton.disabled=true; zeroButton.disabled = false;addTextToScreen(e.target.textContent)}
    else if(e.target.id == "number") {if (screen.textContent=="0")cleanScreen();addTextToScreen(e.target.textContent)}

    }
))

clearButton.addEventListener('click',() => {
    cleanScreen()
    firstNumber=""
    operator=""})
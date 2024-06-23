const add = (a,b)=>a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b)=>a*b;
const divide = (a,b)=>a/b;
let number1 =  0;
let number2 =  0;
let operator = '+';
const operate = (a,b,op) =>{
    switch(op){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        default : return 'Operation Error';
    }
}

let isOperatorActive = false;
let isEqualDone = false;
const display = document.querySelector('#display');
const clear = document.querySelector('#clr');
const equal = document.querySelector('#equal');
equal.addEventListener('click',(e)=>{
    number2 = Number(display.textContent);
    const answer = operate(number1,number2,operator);
    display.textContent = answer;
    number1 = 0;
    number2 = 0;
    operator = '+';
    isEqualDone = true;
});
clear.addEventListener('click',()=>{
    display.textContent = 0;
});
const numbers = document.querySelectorAll('.number');
let n = numbers.length;
for (let i = 0;i<n;i++){
    numbers[i].addEventListener('click',(e)=>{
        let currentDisplay = 0;
        if(isEqualDone){
            display.textContent = 0;
        }
        if(isOperatorActive){
            currentDisplay = 0;
            isOperatorActive = false;
        }
        else{
            currentDisplay = Number(display.textContent);
        }
        const t = Number(e.target.textContent);
        const newNumber = t + currentDisplay*10;
        display.textContent = newNumber;
    });
}
let previousOperator = undefined;
const operators = document.querySelectorAll('.operator');
n = operators.length;
for (let i = 0;i<n;i++){
    operators[i].addEventListener('click',(e)=>{
        operator = e.target.textContent;
        if(previousOperator === undefined){
            previousOperator = operator;
        }
        isOperatorActive = true;
        if(number1 != 0){
            number2 = Number(display.textContent);
            number1 = operate(number1,number2,previousOperator);
            display.textContent = number1;
        }else{
            number1 = Number(display.textContent);
            display.textContent = 0;
        }
        previousOperator = operator;
    });
}
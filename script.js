const add = (a,b)=>a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b)=>a*b;
const divide = (a,b)=>a/b;
let number1 =  1;
let number2 =  1;
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

const display = document.querySelector('#display');

const numbers = document.querySelectorAll('.number');
const n = numbers.length;
for (let i = 0;i<n;i++){
    numbers[i].addEventListener('click',(e)=>{
        const t = Number(e.target.textContent);
        const currentDisplay = Number(display.textContent);
        const newNumber = t + currentDisplay*10;
        display.textContent = newNumber;
    })
}
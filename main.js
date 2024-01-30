const numBtns = document.querySelectorAll('.number');
const operatorBt = document.querySelectorAll('.operation');
const clearBtn = document.querySelectorAll('.clear');
const percentBtn = document.querySelectorAll('.percent');
const backBtn = document.querySelectorAll('.back');
const deciamalBtn = document.querySelectorAll('.decimal');
const equalBtn = document.querySelectorAll('.equals');
const result = document.querySelector('.display');

let fisrtNumber = '';
let secondNumber = '';
let displayedNumber = '';
let operator = '';


function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function division (a, b){
    if (b === 0){
        return 'cannot be divided by 0'
    } else {
        return a / b;
    }
}

function operate (firstNum, SecondNum, operator){
    switch (operator){
        case '+':
            return add(firstNum,SecondNum);
        case '-':
            return subtract(firstNum,SecondNum);
        case '*':
            return multiply(firstNum,SecondNum);
        case '/':
            return division(firstNum,SecondNum);
        default:
            return '';
    }
}
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
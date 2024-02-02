const numBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-all-clear]');
const percentBtn = document.querySelector('.percent');
const backBtn = document.querySelector('[data-delete]');
const equalBtn = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-display]');
const currentOperandTextElement = document.querySelector('[data-current-display]');

class calculator {

    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    
    }
    
    deleteNum() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    append(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    percentage() {
        let percent;
        const current = parseFloat(this.currentOperand);
        if(isNaN(current)) return;
        percent = current * 0.01;
        this.currentOperand = percent;
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;

        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':                
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    
    updateDisplay () {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }


}

const calc = new calculator( previousOperandTextElement, currentOperandTextElement);

numBtns.forEach(button => {
    button.addEventListener('click', () =>{
        calc.append(button.innerText);
        calc.updateDisplay();
    });
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () =>{
        calc.chooseOperation(button.innerText);
        calc.updateDisplay();
    });
});

equalBtn.addEventListener('click', button => {
    calc.compute();
    calc.updateDisplay();
});

clearBtn.addEventListener('click', button => {
    calc.clear();
    calc.updateDisplay();
});

backBtn.addEventListener('click', button => {
    calc.deleteNum();
    calc.updateDisplay();
});

percentBtn.addEventListener('click', button =>{
    calc.percentage();
    calc.updateDisplay();
});

function operate(op) {
    if (num2==='0') num2 = '';
    let result = num2;

    switch(op) {
        case 'clear':
            result = '0';
            break;
        case 'sign':
            break;
        case 'equal':
            let expr = (num1 + " " + operation + " " + num2);
            let temp = Function('"use strict"; return (' + expr + ')')();
            // temp = Math.round((temp + Number.EPSILON) * 10000000) / 10000000;
            num1 = '';
            num2 = '';
            operation = '';
            return temp;
        case '.':
            break;
        case '%':
        case '+': 
        case '-':
        case '*':
        case '/':
            num1 = num2;
            num2 = '';
            if(operation === '') {
                operation = op;
            } else {
                let expr = (num1 + " " + operation + " " + num2);
                let temp = Function('"use strict"; return (' + expr + ')')();
                // temp = Math.round((temp + Number.EPSILON) * 10000000) / 10000000;
                num1 = '';
                num2 = '';
                operation = '';
                return temp;
            }
            return '';
        default:
            result += op;
    }

    return result;
}

let num1 = '';
let num2 = '';
let operation = '';

const resultPanel = document.querySelector('#result-panel #expr');

let buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length; ++i) {
    let button = buttons[i];
    button.onclick =  function()  {
        num2 = operate(button.value);
        if (num2==='') {
            resultPanel.textContent = num1;
            num2 = '';
        } else {
            resultPanel.textContent = num2;
        }
    };
}
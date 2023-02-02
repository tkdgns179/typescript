"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2; // type inference
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is : ';
// resultPhrase = 5; error
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

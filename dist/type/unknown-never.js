"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput; // string | number
let userName;
userInput = 5;
userInput = 'MAX';
if (typeof userInput == 'string') {
    userName = userInput;
}
// userName = userInput; 에러
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An error occurred!', 500);
console.log(result);

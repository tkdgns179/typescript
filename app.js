"use strict";
exports.__esModule = true;
var userInput; // string | number
var userName;
userInput = 5;
userInput = 'MAX';
if (typeof userInput == 'string') {
    userName = userInput;
}
// userName = userInput; 에러
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);

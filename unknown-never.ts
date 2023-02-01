let userInput: unknown; // string | number
let userName: string;

userInput = 5;
userInput = 'MAX'
if (typeof userInput == 'string') {
    userName = userInput;
}
// userName = userInput; 에러

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500);

export {}
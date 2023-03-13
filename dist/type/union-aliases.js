"use strict";
// enum resultConversion { AS_NUMBER, AS_TEXT }
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConversion == "as-number") {
        result = +input2 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion == 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges); // 56
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
exports;

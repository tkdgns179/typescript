"use strict";
// type Person {
//     readonly name: string;
//     age: number;
Object.defineProperty(exports, "__esModule", { value: true });
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name + ' and age :' + this.age);
        }
    }
}
let user1;
// user1 = new Person('김상훈');
user1 = new Person();
// user1 = {
//     name : '김상훈',
//     // age : 12,
//     greet(phrase: string) {
//         console.log(phrase + " " + this.name);
//     }
// }
user1.greet('Hi there - I\'m');
exports.default = Person;

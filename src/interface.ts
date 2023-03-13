// type Person {
//     readonly name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b: number) : number;
}

let add : AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named { 
    greet(phrase: string): void;
}

class Person implements Greetable {
    // class Person implements Greetable, Named {
    name?: string;
    outputName?: string;
    age: number = 30;

    constructor(name? : string) {
        if (name) {
            this.name = name;
        }
    }
    

    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + ' ' + this.name + ' and age :' + this.age);
        }
    }
    
}

let user1 : Greetable;

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
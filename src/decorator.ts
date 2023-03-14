function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    return function<T extends {new(...args: any[]) : {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any) {
                super(...args);
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}


@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {

    name : string;

    constructor(name: string) {
        this.name = name;
        console.log('Createing person object...')
    }

}

const person = new Person('김상훈'); // index.html 렌더링

console.log(person);

function Log(target: any, propertyName: string | Symbol) { 
    console.log("Property decorator!");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) { 
    console.log('Accessor decorator!');
    console.log(target)
    console.log(name);
    console.log(descriptor);
    // return { enumerable }
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDecorator) {
    console.log('Method decorator!');
    console.log(target)
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position : number) {
    console.log('Argument decorator!');
    console.log(target)
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive')
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; // 함수포인터
    const adjDescriptor : PropertyDescriptor = {
        configurable : true,
        enumerable: false,
        get() { // value에 접근할 때 개입하여 실행
            // console.log('this', this)
            const boundFn = originalMethod.bind(this);
            return boundFn
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works!'

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button : HTMLElement = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string] : {
        [validatableProp: string] : string[] // ['required', 'positive']
    }
}

let registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    // console.log(target.constructor.name, propName)
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    }
}
function PositiveNumber(target: any, propName: string) {
    // console.log(target.constructor.name, propName)
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positve']
    }
    
}

function validation(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    return isValid = isValid && !!obj[prop];
                case 'positive':
                    return isValid = isValid && obj[prop] > 0;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string;

    @PositiveNumber
    @Required
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm : HTMLElement = document.querySelector('form')!;


courseForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title =  titleEl.value;
    const price =  +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validation(createdCourse)) {
        alert('Invalid input, please try again!')
    }

    console.log(createdCourse);
    
})
console.log('-----------------------');
console.log(registeredValidators)
// interface Test {
//     [name : string] : {
//         title: string
//     }
// }

// let a : Test = {};
// a['hello'] = {title: 'hello'};
// a['bye'] = {title: 'bye'};

// let b : Test = {
//     hello : {title : 'hello'},
//     bye : {title : 'bye'}
// }

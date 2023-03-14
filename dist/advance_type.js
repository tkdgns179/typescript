"use strict";
// type Admin = {
//     name: string;
//     privileges: string[];
// };
var _a;
;
;
;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add1(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add1('Max', ' Schwarz');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    // job: { title: 'CEO', description: 'My own company'}
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
function printEmployeeInfomation(emp) {
    console.log('Name : ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges : ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate : ' + emp.startDate);
    }
}
printEmployeeInfomation({ name: 'Manu', startDate: new Date });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving...');
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed : ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
const errorBag = {
    email: 'Not a valid email!!',
    username: 'Must start with a character!'
};

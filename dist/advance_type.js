"use strict";
// type Admin = {
//     name: string;
//     privileges: string[];
// };
;
;
;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
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
console.log(errorBag);

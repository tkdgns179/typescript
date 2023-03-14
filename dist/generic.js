"use strict";
const names = ["Max", "Manuel"];
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
mergedObj.age;
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!!")); // string.length
function extractAndConvert(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
        return this;
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // indexOf : if finding nothing , return -1
        return this;
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max").addItem("Manu").removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objectStorage = new DataStorage();
const maxObj = { name: "Max" };
objectStorage
    .addItem(maxObj)
    .addItem({ name: "Manu" })
    // ...
    .removeItem(maxObj); // reference type이라 삭제 불가
console.log(objectStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesReadonly = ['Max', 'Sports'];

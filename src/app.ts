const names: Array<string> = ['Max', 'Manuel'];

names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000)
})

promise.then(data => {
    data.split(' ');
})

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log(merge({name: 'Max'}, {age: 30}));

const mergedObj = merge({name: 'Max'}, {age: 30});
mergedObj.age;

interface Lengthy {
    length: number;
}

function  countAndDescribe<T extends Lengthy>(element : T) :  [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = `Got 1 element.`
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`
    }
    
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!!')) // string.length 

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

class DataStorage<T> {
    private data : Array<T> = [];
 
    addItem(item: T) {
        this.data.push(item);
        return this;
    }

    removeItem(item: T) {
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

const textStorage = new DataStorage<string>();

textStorage.addItem('Max')
    .addItem('Manu')
    .removeItem('Max');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();

const maxObj = {name: 'Max'};

objectStorage.addItem(maxObj)
    .addItem({name: 'Manu'})
    // ...
    .removeItem(maxObj); // reference type이라 삭제 불가

console.log(objectStorage.getItems());
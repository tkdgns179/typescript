"use strict";
// interface person { name: string; age: number};
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 4] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
exports.person = person;
{
    person.role == Role.ADMIN && console.log('is admin');
}
;
console.log(person.role);
let favoriteActivities; // any[] 아무거나 넣기가능
favoriteActivities = ['Sports'];
// console.log(person.nickname); 존재하지 않는 property
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) error
}

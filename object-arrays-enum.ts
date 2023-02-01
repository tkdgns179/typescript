// interface person { name: string; age: number};

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 1, READ_ONLY = 2, AUTHOR = 4 }

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}
{person.role == Role.ADMIN && console.log('is admin')};


console.log(person.role)

let favoriteActivities: string[]; // any[] 아무거나 넣기가능
favoriteActivities = ['Sports']
// console.log(person.nickname); 존재하지 않는 property
console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) error
}

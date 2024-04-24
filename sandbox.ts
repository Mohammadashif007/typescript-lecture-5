// ! explicit type

let character: string;
let age: number;
let isLoggedIn: boolean;

character = "luigi";
age = 44;
isLoggedIn = false;

// ! array

let ninjas: string[]; //! we can't use push method in this string because we didn't initialized an array;
let numbers: number[] = []; //! Now we can use push method here because we initialized an array;

ninjas = ["john", "tom", "jerry"];

numbers = [44, 88];

// ! union types

let mixed: (string | number | boolean)[] = [];
mixed.push(44);
mixed.push("john");
mixed.push(false)

let uid: string | number | boolean;

uid = "33"
uid = 99
uid = false

console.log(mixed);

// ! object

let ninjaOne:object;

ninjaOne = {name: 'john', age: 44};
ninjaOne = ['john', 44, true]

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {name: 'john', age: 44, belt: 'black'}
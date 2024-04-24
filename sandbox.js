// ! explicit type
var character;
var age;
var isLoggedIn;
character = "luigi";
age = 44;
isLoggedIn = false;
// ! array
var ninjas; //! we can't use push method in this string because we didn't initialized an array;
var numbers = []; //! Now we can use push method here because we initialized an array;
ninjas = ["john", "tom", "jerry"];
numbers = [44, 88];
// ! union types
var mixed = [];
mixed.push(44);
mixed.push("john");
mixed.push(false);
console.log(mixed);

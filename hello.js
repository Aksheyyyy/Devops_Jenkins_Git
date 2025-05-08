// Object Destructuring
const person = { name: "Aryan", age: 22 };
const { name, age } = person;
console.log(name);  

// Array Destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);  

// Function Destructuring
const user = {
    name: "ABCD",
    age: 23,
    location: "MUMBAI",
};

// Using destructuring in function parameters
const getUserInfo = ({ name, age, location }) => `Name: ${name}, Age: ${age}, Loc: ${location}`;

console.log(getUserInfo(user));  

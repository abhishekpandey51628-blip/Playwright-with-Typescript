"use strict";
function basic(a, b) {
    return a + b;
}
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `${greeting || "Hello"}, ${name}!`;
}
//Rest function 
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Arrow function
const multiply = (a, b) => a * b;

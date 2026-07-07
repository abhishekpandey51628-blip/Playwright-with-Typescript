"use strict";
// primitive data types
let GoodName = "Abhishek";
let age = 25;
let decimal = 10.5;
console.log(GoodName);
console.log(age);
console.log(decimal);
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
console.log(numbers);
console.log(names);
// Tuples
let person = ["John", 30];
console.log(person);
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(favoriteColor);
// Any type
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);
//Unknown type
let unknownValue = 10;
unknownValue = "Hello";
unknownValue = true;
console.log(unknownValue);
function displayValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value);
    }
    else if (typeof value === "number") {
        console.log("Number value:", value);
    }
    else if (typeof value === "boolean") {
        console.log("Boolean value:", value);
    }
    else {
        console.log("Unknown type");
    }
}

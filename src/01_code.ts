// primitive data types
let GoodName: string = "Abhishek";
let age: number = 25;
let decimal: number = 10.5;
console.log(GoodName);
console.log(age);
console.log(decimal);

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(numbers);
console.log(names);

// Tuples
let person: [string, number] = ["John", 30];
console.log(person);

// Enums
enum Color {
  Red,
  blue,
  Green,
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor);

// Any type
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

//Unknown type
let unknownValue: unknown = 10;
unknownValue = "Hello";
unknownValue = true;
console.log(unknownValue);

function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Number value:", value);
  } else if (typeof value === "boolean") {
    console.log("Boolean value:", value);
  } else {
    console.log("Unknown type");
  }
}   
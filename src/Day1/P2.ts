// P2: Write a generic function getFirst<T>(items: T[]): T that returns the first item of any typed array, and call it with a string[] and a TestCase[].
function GenericFunction<T>(arg: T[]): T {
    return arg[0];
}

let arg1= [1,2,3,4];
let arg2 = ['a', 'b', 'c', 'd'];
let arg3 = [true, false, true, false];
let array1 = GenericFunction(arg1);
let array2 = GenericFunction(arg2);
let array3 = GenericFunction(arg3);
console.log(array1);    
console.log(array2);
console.log(array3);

"use strict";
function GenericFunction(arg) {
    return arg[0];
}
let arg1 = [1, 2, 3, 4];
let arg2 = ['a', 'b', 'c', 'd'];
let arg3 = [true, false, true, false];
let array1 = GenericFunction(arg1);
let array2 = GenericFunction(arg2);
let array3 = GenericFunction(arg3);
console.log(array1);
console.log(array2);
console.log(array3);

"use strict";
async function delayedValue(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
async function mainfunc() {
    const result1 = await delayedValue("Hello", 1000);
    const result2 = await delayedValue(42, 2000);
    const result3 = await delayedValue(true, 3000);
    console.log(result1); // Logs "Hello" after 1 second
    console.log(result2); // Logs 42 after 2 seconds
    console.log(result3); // Logs true after 3 seconds
}
mainfunc();

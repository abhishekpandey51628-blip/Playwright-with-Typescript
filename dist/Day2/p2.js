"use strict";
async function delayedValueTime(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
async function mainfunccom() {
    const start = Date.now();
    const result1 = await delayedValueTime("Hello", 1000);
    const result2 = await delayedValueTime(42, 2000);
    const result3 = await delayedValueTime(true, 3000);
    const end = Date.now();
    console.log(`Time taken: ${end - start} ms`);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log('');
    const start2 = Date.now();
    const results = await Promise.all([
        delayedValueTime("Hello", 1000),
        delayedValueTime(42, 2000),
        delayedValueTime(true, 3000)
    ]);
    const end2 = Date.now();
    console.log(`Time taken with Promise.all: ${end2 - start2} ms`);
    console.log(results);
}
mainfunccom();

"use strict";
async function getEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('abhishek.pandey@codequotient.com');
        }, 2000);
    });
}
async function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Abhishek Pandey');
        }, 2000);
    });
}
async function getAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25);
        }, 2000);
    });
}
async function mainfun() {
    let start = Date.now();
    let results = await Promise.all([
        getEmail(),
        getName(),
        getAge()
    ]);
    let end = Date.now();
    console.log(results);
    console.log(`Time taken: ${end - start} ms`);
}
mainfun();

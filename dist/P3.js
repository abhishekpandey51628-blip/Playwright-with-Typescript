"use strict";
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await res.json();
    return response.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
    }));
}
async function main() {
    const r = await getUsers();
    console.log(r);
}
main();

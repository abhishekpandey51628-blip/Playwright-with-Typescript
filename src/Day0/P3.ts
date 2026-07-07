 //P3: Write an async function getUsers() that fetches https://jsonplaceholder.typicode.com/users, awaits the JSON, and returns only { id, name, email } 
 //for each user using .map().
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await res.json();

    return response.map((u: { id: number; name: string; email: string }) => ({
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
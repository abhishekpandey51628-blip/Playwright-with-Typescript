// P4: Write a function formatUser(user: { name: string; age?: number }): string that handles the optional age gracefully (e.g., "Amit (age unknown)" vs "Amit, 29").
function FormatUser(user: { name: string; age?: number }): string {
    return `${user.name} (${user.age || 'Unknown Age'})`;
}

console.log(FormatUser({ name: 'Abhishek', age: 25 }));
console.log(FormatUser({ name: 'John' }));
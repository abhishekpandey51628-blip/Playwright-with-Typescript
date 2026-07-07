"use strict";
function FormatUser(user) {
    return `${user.name} (${user.age || 'Unknown Age'})`;
}
console.log(FormatUser({ name: 'Abhishek', age: 25 }));
console.log(FormatUser({ name: 'John' }));

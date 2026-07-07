function basic(a: number, b:number): number {
    return a+b;
}

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `${greeting || "Hello"}, ${name}!`;
    
}

//Rest function 
function sum(...numbers:number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;
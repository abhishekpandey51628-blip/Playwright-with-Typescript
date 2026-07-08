async function delayedValue<T>(value: T, ms: number): Promise<T> {
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
    console.log(result1); 
    console.log(result2); 
    console.log(result3);
}

mainfunc();
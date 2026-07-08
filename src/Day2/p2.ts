async function delayedValue<T>(value: T, ms: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}

async function mainfunc() {
    const start = Date.now();
    const result1 = await delayedValue("Hello", 1000);
    const result2 = await delayedValue(42, 2000);
    const result3 = await delayedValue(true, 3000);
    const end = Date.now();
    console.log(`Time taken: ${end - start} ms`);
    console.log(result1); 
    console.log(result2); 
    console.log(result3);



    console.log('');
    const start2 = Date.now();
    const results = await Promise.all([
        delayedValue("Hello", 1000),
        delayedValue(42, 2000),
        delayedValue(true, 3000)
    ]);
    const end2 = Date.now();
    console.log(`Time taken with Promise.all: ${end2 - start2} ms`);

    console.log(results);
}

mainfunc();
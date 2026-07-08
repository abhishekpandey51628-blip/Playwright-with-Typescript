"use strict";
//P2: Write mergeConfigs(base, override) 
// using spread syntax that merges two config 
// objects, with override values winning conflicts.
function mergeConfigs(base, override) {
    return { ...base, ...override };
}
let base = {
    host: "localhost",
    cost: 940
};
let override = {
    port: 8080,
    protocol: "https",
    cost: 1000
};
let merged = mergeConfigs(base, override);
console.log(merged);

"use strict";
function mergeConfigs(base, override) {
    return { ...base, ...override };
}
let base = {
    host: "localhost",
    Cost: 940
};
let override = {
    port: 8080,
    protocol: "https"
};
let merged = mergeConfigs(base, override);
console.log(merged);

"use strict";
let obj = [{
        name: "John",
        status: "failed",
        duration: 5
    }, {
        name: "Jane",
        status: "passed",
        duration: 10
    }, {
        name: "Bob",
        status: "failed",
        duration: 15
    }];
let res = obj.filter((r) => r.status === "failed").map((r) => ({ name: r.name, duration: r.duration }));
console.log(res);

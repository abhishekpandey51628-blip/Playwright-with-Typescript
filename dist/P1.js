"use strict";
const user = {
    fullname: "John",
    role: "QA",
    tools: ["Selenium", "Cypress", "Playwright"],
};
let { fullname, role: jobTitle, tools } = user;
console.log(fullname);
console.log(jobTitle);
console.log(tools);

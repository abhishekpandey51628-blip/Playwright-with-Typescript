 //P1: Given const user = { name: "Amit", role: "QA", tools: ["Playwright", "Postman"] }, 
 // destructure name and tools in one line, 
 // and rename role to jobTitle while destructuring.

const user={
    fullname:"Amit",
    role:"QA",
    tools:["Selenium","Cypress","Playwright"],

}
let {fullname,role: jobTitle,tools}=user;
console.log(fullname);
console.log(jobTitle);
console.log(tools);
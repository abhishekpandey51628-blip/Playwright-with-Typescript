 //P4: Given an array of test result objects { name, status, duration }, write one chained expression using .filter() + .map() that returns the names
 // of all tests that failed.
let obj=[{
    name: "John",
    status: "failed",
    duration: 5


},{
    name: "Jane",
    status: "passed",
    duration: 10
},{
    name: "Bob",
    status: "failed",
    duration: 15
}];

let res=obj.filter((r)=> r.status==="failed").map((r)=>({name:r.name,duration:r.duration}));
console.log(res);
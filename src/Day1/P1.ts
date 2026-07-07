 //P1: Define an interface TestCase { id: number; title: string; tags: string[]; priority: "low" | "medium" | "high" } and create 2 sample objects that satisfy it.
interface TestCase {
    id: number;
    title: string;
    tags: string[];
    priority: 'high' | 'medium' | 'low';
}

let obj1 : TestCase = {
    id: 1,
    title: 'Task 1',
    tags: ['tag1', 'tag2'],
    priority: 'high'
};

let obj2 : TestCase = {
    id: 2,
    title: 'Task 2',
    tags: ['tag3', 'tag4'],
    priority: 'medium'
};

console.log(obj1);
console.log(obj2);  
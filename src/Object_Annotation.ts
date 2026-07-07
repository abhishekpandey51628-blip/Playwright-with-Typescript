//Object Type Annotation
interface User {
    name: string;
    role: string;
    tools: string[];
    email?: string; // Optional property
};


let use: User = {
    name: "John",
    role: "QA",
    tools: ["Selenium", "Cypress", "Playwright"],
};

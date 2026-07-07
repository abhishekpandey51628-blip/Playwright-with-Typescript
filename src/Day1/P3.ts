// P3: Create a readonly interface EnvConfig { baseURL: string; timeout: number }, then write a line of code that would fail to compile if you tried to mutate it (comment explaining the TS error).
interface EnvConfig {
   readonly apiUrl: string;
   readonly timeout: number;
}

let config: EnvConfig = {
   apiUrl: 'https://api.example.com',
   timeout: 5000
};
console.log(config.apiUrl);
console.log(config.timeout);
 
// config.apiUrl = 'https://api.newexample.com'; 

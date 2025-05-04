// 1st Questions
// var names = "Vijayant";
names = "Joshi"; // allowed
console.log(names);

let age = 24;
age = 25; // allowed
// let age = 30; // ❌ not allowed in same scope
console.log(age);

const birthYear = 2000;
// birthYear = 2001; // ❌ not allowed
console.log(birthYear);

const name = "Vijayant";  // string
const ages = 25;         // number
const isDev = true;     // boolean
const hobbies = ["coding", "music"]; // array
const user = { name: "Vijayant", age: 25 }; // object

const n = 10; // Global Scope

function fun() {
    const n = 20; // Shadows the global 'n' inside the function
    console.log(n); // Output: 20
}
fun();
console.log(n); // Output: 10 (global 'n' remains unchanged)

// 2nd Questions
// 1. Scope Example
function testVar() {
    if (true) {
        var a = 10;
    }
    console.log(a); // ✅ Works because `var` is function-scoped
}
testVar();

function testLet() {
    if (true) {
        let b = 20;
    }
    console.log(b); // ❌ Error: b is not defined
}
// testLet();

// 3. Hoisting Example
console.log(a); // undefined
var a = 5;

// console.log(b); // ❌ ReferenceError
let b = 10;

// console.log(c); // ❌ ReferenceError
const c = 15;

const person = { fName: "Vijayant", lName: "Joshi" };
console.log(person);
person.fName = "Trisha"; // ✅ Allowed
person.lName = "Sharma"; // ✅ Allowed
console.log(person);
// person = { fName: "Kanak" }; // ❌ Not allowed

// 3rd Questions
// 4th Questions
// 5th Questions
// 6th Questions
// 7th Questions
// 8th Questions
// 9th Questions
// 10th Questions
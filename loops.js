console.log("Welcome to Loops in JavaScript");

// Loops
// Types of Loops in programming
// 1. For Loop
// 2. While Loop
// 3. Do While Loop

// For Loop
// Syntax for a for loop
// for (initialization; condition; increment / decrement) {
//   // do something
// }

for (let i = 0; i < 10; i++) {
  console.log("Bolarinwa", i);
}

for (let i = 10; i > 0; i--) {
  console.log("Tolulope", i);
}

const usersDiv = document.getElementById("users");
for (let i = 1; i <= 10; i++) {
  usersDiv.innerHTML += `<li>User ${i}</li>`;
}

const myName = "Bolarinwa";
console.log("My name is " + myName);
console.log(`My name is ${myName}`);

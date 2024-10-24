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

// While Loop
// Sytanx for a while loop
// initialization;
// while (condition) {
//   // do something
//   increment / decrement;
// }

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("While loops");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let i = 0;
while (i < 10) {
  console.log("While loop " + i);
  i++;
}

let j = 10;
while (j > 0) {
  console.log("Decrement in while loop ", j);
  j--;
}

// Building a simple game for a user with 3 lives using while loop

let numberOfLives = 3;
let isAlive = true; // flag
while (isAlive) {
  console.log("You have " + numberOfLives + " lives left");
  console.log("You have been killed by a monster");
  if (numberOfLives === 0) {
    isAlive = false;
  }
  numberOfLives--;
}

// 3. Do While Loop
// Sytnax for a do while loop

// initialization;
// do {
//   // do something
// }
// while (condition);

let k = 11;
do {
  console.log("Do while loop ", k);
  k++;
} while (k < 10);

// Break and Continue in Loops
// Break - to stop the loop
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("Break in loop ", i);
}

// Continue - to skip the current iteration
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Odd number in loop ", i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log("Even number in loop ", i);
}

// Nested Loops
for (let i = 0; i < 11; i++) {
  console.log(i);
  for (let j = 0; j < 11; j++) {
    console.log("Inner loop", j);
  }
}

// Building a simple multiplication table using nested loops
const multiplicationTable = document.getElementById("multiplicationTable");
for (let i = 2; i <= 12; i++) {
  let tableTitle = document.createElement("h1");
  tableTitle.textContent = `Table ${i}`;
  multiplicationTable.appendChild(tableTitle);
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    multiplicationTable.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`;
  }
}

// Class work
// Write a code to loop through the numbers from 1 to 10.
// For each iteration of the loop display the text "User 1" to "User 10" in the console
// Create a nested loop inside the loop to display the text "Child 1" to "Child 10" in the console

// Assignment
/*
    Write a code to display the numbers from 1 to 100

    For every number that is a multiple of 3 display "Fizz" instead of the number

     For every number that is a multiple of 5 display "Buzz" instead of the number

      For every number that is a multiple of both 3 and 5 display "FizzBuzz" instead of the number

*/

// Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

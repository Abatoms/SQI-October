console.log("Welcome to Functions in JavaScript");

// DRY - Dont repeat yourself
// Functions are a way to group code together and reuse it

// Syntax for a function
//  function functionName (){

//  }
// function declaration / definition
function sayHello() {
  console.log("Hello World, welcome to functions hehe!!!");
}

// Function invocation / calling
sayHello();

// Types of functions
// 1. Function with parameters
//  2. Function with return value
//  3. Arrow functions
//  4. Anonymous functions
//  5. IIFE - Immediately Invoked Function Expression
//  6. Recursive functions
//  7. Callback functions

// 1. Function with parameters
function greetUser(name) {
  // name is a parameter
  console.log("Welcome to the world of functions, " + name);
}

greetUser("Bolarinwa"); // Bolarinwa is an argument
greetUser("Jinadu"); // Jinadu is an argument
greetUser("Ajanaku"); // Ajanaku is an argument

function calculateSum(numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  console.log("The sum of " + numberOne + " and " + numberTwo + " is " + sum);
}

calculateSum(10, 5);

calculateSum(20, 30);

// Function with parameters and a default value
function calculator(numbOne, numbTwo, action = "+") {
  if (action === "+") {
    let sum = numbOne + numbTwo;
    console.log("The sum of " + numbOne + " and " + numbTwo + " is " + sum);
  } else if (action === "-") {
    let difference;
    if (numbOne >= numbTwo) {
      difference = numbOne - numbTwo;
    } else {
      difference = numbTwo - numbOne;
    }
    console.log(
      "The difference of " + numbOne + " and " + numbTwo + " is " + difference
    );
  } else if (action === "*") {
    let product = numbOne * numbTwo;
    console.log(
      "The product of " + numbOne + " and " + numbTwo + " is " + product
    );
  } else if (action === "/") {
    let division = numbOne / numbTwo;
    console.log(
      "The division of " + numbOne + " and " + numbTwo + " is " + division
    );
  } else {
    console.log("Invalid action entered");
  }
}

calculator(100, 500, "*");

// 2. Function with return value
function calculateSumWithReturnValue(numbOne, numbTwo) {
  let sum = numbOne + numbTwo;
  return sum;
  //   console.log("Tansun a banji");
}

let result = calculateSumWithReturnValue(10, 20);
console.log("Alaye my result is: ", result);
console.log(
  "Please sir, find attached my result: ",
  calculateSumWithReturnValue(20, 70)
);

// Classwork
// Write a function that calculates the area of a circle, take the radius as an argument and return the area of the circle
// Write a function that calculates the area of a rectangle, take the length and breadth as arguments and log the area of the rectangle

// Solution
const pi = 3.142;
function areaOfCircle(radius) {
  return pi * radius * radius;
}

let myArea = areaOfCircle(10);
console.log(myArea);
console.log("The area of the circle is: ", areaOfCircle(7));

function areaOfRectangle(length, breadth) {
  let area = length * breadth;
  console.log("The area of the rectangle is: ", area);
}

areaOfRectangle(12, 8);

// Assignment
// Write a function that calculates the volume of a cylinder, take the radius and height as arguments and log the volume of the cylinder
// Write a function that calculates the area of a triangle, take the base and height as arguments and return the area of the triangle
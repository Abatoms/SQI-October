console.log("Welcome to Javascript");
// Variables
var myName = "John";
console.log(myName);
// Rules of variables
// 1. Variables should only contain letters, numbers, underscore, and dollar sign
var my_name = "Jane";
console.log(my_name);
var myname$ = "Doe";
console.log(myname$);
var name1 = "Jinadu";
console.log(name1);

// 2. Variables should not be a reserved keyword
// var var = "Yayyyy";
// console.log(var);

// 3. Variables should not start with a number
// var 1test = "Test";
// console.log(1test)

// 4. Variables are case-sensitive
var myFavCar = "Toyota";
// console.log(MyFavCar);
console.log(myFavCar);

// 5. Variables name should always be descriptive
var myFavoriteCarWhenIAmInLondon = "Audi";

// Types of Naming Convention
// 1. camel Case
// 2. Pascal Case
// 3. Snake Case (Not really used in Javascript)

// 1. camel Case
var myFacoriteCar = "Toyota";

// 2. Pascal Case
var MyWorstCar = "Nissan";

// 3. Snake case
var my_favorite_car = "Toyota";

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Data Types");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// Data Types
// 1. String
var testName = "Bolarinwa";
console.log(testName);
console.log(typeof testName);

// 2. Number
var testNumber = 10;
console.log(testNumber);
console.log(typeof testNumber);
var testNumber2 = "30";
console.log(testNumber2);
console.log(typeof testNumber2);

// 3. Boolean
var testBoolean = true;
console.log(testBoolean);
console.log(typeof testBoolean);

// 4. Null (object)
var testNull = null;
console.log(testNull);
console.log(typeof testNull);

// 5. Undefined
var testUndefined = undefined;
var testUndefined2;
console.log(testUndefined);
console.log(testUndefined2);
console.log(typeof testUndefined);

var myAge; // variable declaration
console.log(myAge);
myAge = 16; // variable initialization
console.log(myAge);
myAge = 12; // variable re-assignment
console.log(myAge);

console.log(myFavCar);
myFavCar = "Honda";
console.log(myFavCar);

// Alert Keyword\
// alert("Welcome to Javascript");

// Confirm Keyword
// var userResponse = confirm("Are you sure you want to learn Javascript???");
// console.log(userResponse);

// if (userResponse === true) {
//   console.log("Welcome to Javascript");
// } else {
//   console.log("Go back to HTML");
// }

// // Prompt Keyword
// const yourAge = prompt("How old are you?");
// console.log("Your age is " + yourAge);

console.log(2 + 2); // 4
console.log("2" + "2"); //22

// Concatenation
var firstName = "John";
var lastName = "Doe";
var fullName;
fullName = firstName + " " + lastName;
console.log(fullName);
console.log("My full name is " + fullName + " and I am a Javascript Developer");

var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var sum = Number(firstNumber) + Number(secondNumber);
console.log(
  "The sum of " + firstNumber + " and " + secondNumber + " is " + sum
);

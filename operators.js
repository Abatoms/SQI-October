console.log("Welcome to Operators in JavaScript");
// Operators
// Types of Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators

// 1. Arithmetic Operators
let numberOne = 100;
let numberTwo = 20;

// Addition
let sum = numberOne + numberTwo;
console.log("The sum of " + numberOne + " and " + numberTwo + " is " + sum);
let numbOne = "10";
let numbTwo = "20";
sum = Number(numbOne) + Number(numbTwo);
console.log("The sum of " + numbOne + " and " + numbTwo + " is " + sum);

// Substraction
let difference = numberOne - numberTwo;
console.log(
  "The difference between " +
    numberOne +
    " and " +
    numberTwo +
    " is " +
    difference
);

difference = numbTwo - numbOne;
console.log(
  "The difference between " + numbTwo + " and " + numbOne + " is " + difference
);

// Multiplication
let product = numberOne * numberTwo;
console.log(
  "The product of " + numberOne + " and " + numberTwo + " is " + product
);

product = numbOne * numbTwo;
console.log("The product of " + numbOne + " and " + numbTwo + " is " + product);

// Division
let division = numberOne / numberTwo;
console.log(
  "The division of " + numberOne + " and " + numberTwo + " is " + division
);

division = numbTwo / numbOne;
console.log(
  "The division of " + numbTwo + " and " + numbOne + " is " + division
);

let firstNumber = 10;
let secondNumber = 3;

// Modulus Operator
let modulo = firstNumber % secondNumber;
console.log(modulo);

// Exponebtial Operator
let exponent = secondNumber ** firstNumber;
console.log(exponent);
let exponentTwo = firstNumber ** secondNumber;
console.log(exponentTwo);

// Increment Operator
let number = 10;

// Post Increment
let postIncrement = number++;
console.log("Post Increment is: ", postIncrement);
console.log("Number after post increment: ", number);

// Pre Increment
let preNumber = 10;
let preIncrement = ++preNumber;
console.log("Pre Increment is: ", preIncrement);
console.log("Number after pre increment: ", preNumber);

// Decrement Operator
let decrementNumber = 10;
// Post Decrement
let postDecrement = decrementNumber--;
console.log("Post Decrement is: ", postDecrement);
console.log("Number after post decrement: ", decrementNumber);

// Pre Decrement
let preDecrementNumber = 10;
let preDecrement = --preDecrementNumber;
console.log("Pre Decrement is: ", preDecrement);
console.log("Number after pre decrement: ", preDecrementNumber);

// 2. Assignment Operators
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Assignment Operators");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let x = 10;
let y = 20;
console.log("Value of x: ", x);
console.log("Value of y: ", y);

// Addition Assignment
let z = 4;
// z = z + x;
z += x; // z = z + x
console.log("Value of z: ", z);

// Substraction Assignment
let a = 5;
a -= y; // a = a - y
console.log("Value of a: ", a);

// Multiplication Assignment
let b = 5;
b *= x; // b = b * x
console.log("Value of b: ", b);

// Division Assignment
let c = 10;
c /= y; // c = c / y
console.log("Value of c: ", c);

// Modulus Assignment
let d = 100;
d %= y; // d = d % y
console.log("Value of d: ", d);

// Exponential Assignment
let e = 2;
e **= x; // e = e ** x
console.log("Value of e: ", e);

// 3. Comparison Operators
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Comparison Operators");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let myScore = 100;
let totalScore = 100;
// Equal to
// ==, ===
let eqaulTo = myScore == totalScore;
let strictEqualTo = myScore === totalScore;
console.log("My score eqaul to total score: " + eqaulTo);
console.log("My score strict eqaul to total score: " + strictEqualTo);

// Not Equal to
// !=, !==
let notEqualTo = myScore != totalScore;
let strictNotEqualTo = myScore !== totalScore;
console.log("My score not eqaul to total score: " + notEqualTo);
console.log("My score strict not eqaul to total score: " + strictNotEqualTo);

let myAge = 16;
let votingAge = 18;
// Greater than
// >
let greaterThan = myAge > votingAge;
console.log("My age is greater than voting age: " + greaterThan);

// Less than
let lessThan = myAge < votingAge;
console.log("My age is less than voting age: " + lessThan);

// Greater than or equal to
// >=
let greaterThanOrEqualTo = myAge >= votingAge;
console.log(
  "My age is greater than or equal to voting age: " + greaterThanOrEqualTo
);

// Less than or equal to
// <=
let lessThanOrEqualTo = myAge <= votingAge;
console.log("My age is less than or equal to voting age: " + lessThanOrEqualTo);

// 4. Logical Operators
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Logical Operators");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

// Logical AND
// Logical OR
// Logical NOT

// Logical AND
// &&
// Rules for AND
// true && true = true
// true && false = false
// false && true = false
// false && false = false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
let isAdult = true;
let hasVoterId = true;
let canVote = isAdult && hasVoterId;
console.log("Can vote: ", canVote);

// Logical OR
// ||
// Rules for OR
// true || true = true
// true || false = true
// false || true = true
// false || false = false
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
let isSeniorCitizen = true;
let isDisabled = true;
let canGetBenefits = isSeniorCitizen || isDisabled;
console.log("Can get benefits: ", canGetBenefits);

// Logical NOT
// !
let isDisabledPerson = true;
let canWork = !isDisabledPerson;
console.log("Can work: ", canWork);

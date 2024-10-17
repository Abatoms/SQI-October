console.log("Welcome to Conditionals in JavaScript");
// Conditionals in js
// 1. Simole If Statements
// 2. If else Statements
// 3. Compound IF else Statements
// 4. Nested If STatements
// 5. Switch Cases

// 1. Simple If Statements
// Syntax for if statemrnts
// if(condition){
//     Statement to execute
// }
let haveMoney = true;
if (haveMoney) {
  console.log("I have money for lunch this afternoon");
}

let myAge = 16;
if (myAge > 18) {
  console.log("User is eligible to vote");
}

// 2. If else statments
// Syntax for if else statements
// if(condition){
//     statement to execute if condition is true
// } else{
//     statement to execute if condition if false
// }

let isRaining = true;
if (isRaining) {
  console.log("Not going to class today, shima dey come");
  console.log("Make me chop after chopping");
} else {
  console.log("Make i just dey go jare");
}

// Compound if else statements
// Syntax for compound if else statements
/*
    if(condition is true){
        // statement to execute
    }
        else if(another condition is trur){
        // statement to execute
        }
        else{
            // statement to execute
        }
*/

let myJambScore = 120;
if (myJambScore >= 200) {
  console.log("You are going to a university");
} else if (myJambScore >= 160 && myJambScore < 200) {
  console.log("You are going to a polytechnic");
} else if (myJambScore >= 120 && myJambScore < 160) {
  console.log("You are going to a college of education");
} else {
  console.log("Dey go your mama house");
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.");

// Nested if else statements
let jamScore = 170;
let postUtmeScore = 30;

if (jamScore >= 200) {
  console.log("You are goin to a university");
  if (postUtmeScore >= 50) {
    console.log("You are going to a federal university");
  } else {
    console.log("You are going to a state university");
  }
} else if (jamScore >= 160 && jamScore < 200) {
  console.log("You are going to a polytechnic");
  if (postUtmeScore >= 50) {
    console.log("You are going to a federal Polytechnic");
  } else {
    console.log("You are going to a state Polytechnic");
  }
} else if (jamScore >= 120 && myJambScore < 160) {
  console.log("You are going to a college of education");
  if (postUtmeScore >= 50) {
    console.log("You are going to a federal college of education");
  } else {
    console.log("You are going to a state college of education");
  }
} else {
  console.log("Dey go your mama house");
}

// Classword
// You are building an hostel management system and you have been given the following information to work with

// A student is allowed to registerd for hostel if they have completed their admission regsistration. If they haven't they should be asked to go complete their admission registration.
// After the student has registered for hostel, we then check if they have paid for the hostel. If they haven't they should be asked to go pay for the hostel. If they have, we tell send them a congratulatory message
const studentRegistered = false;
const studentPaid = true;
let hostelRegistration = false;

if (studentRegistered) {
  console.log("You have been registered for admission");
  hostelRegistration = true;
  if (hostelRegistration) {
    if (studentPaid) {
      console.log(
        "Congratulations, you have successfully registered for hostel accommodation"
      );
    } else {
      console.log("Please go and pay to complete your hostel registration");
    }
  }
} else {
  console.log("Please go and complete your admission registration");
}

/*
    Classwork
    Question: Write a JavaScript code that log the following messages to the console:

    "Positive and even" if the number is positive and even,
    "Positive and odd" if the number is positive and odd,
    "Negative" if the number is negative,
    "Zero" if the number is zero.

*/

let number = prompt("Enter a number: ");
if (number > 0) {
  if (number % 2 === 0) {
    console.log("Positive and even");
  } else {
    console.log("Positive and odd");
  }
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

/*
Assigment:
You are developing a program for a bookstore's inventory system that categorizes books based on their genre, publication year, and availability status. The program should determine the discount rate for a customer based on these three factors.

If the book is a Science Fiction:

If it was published before 2000:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
If it was published in or after 2000:
If it's in stock, the discount is 10%.
If it's out of stock, the discount is 5%.

If the book is a Romance:

If it was published before 2010:
If it's in stock, the discount is 25%.
If it's out of stock, the discount is 20%.
If it was published in or after 2010:
If it's in stock, the discount is 15%.
If it's out of stock, the discount is 10%.

For all other genres:

If it was published before 2005:
If it's in stock, the discount is 30%.
If it's out of stock, the discount is 25%.
If it was published in or after 2005:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
Write a program using nested if statements that takes the genre, publication year, and availability status as inputs and outputs the appropriate discount rate for the customer. Ensure to handle edge cases and provide meaningful output.

Example Input/Output:
Input: Genre = "Science Fiction", Year = 1998, Status = "in stock"

Output: "The discount rate for this book is 20%."
Input: Genre = "Romance", Year = 2015, Status = "out of stock"

Output: "The discount rate for this book is 10%."
*/

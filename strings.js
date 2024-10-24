console.log("Welcome to strings in JavasScript");

// Strings
// Strings are a collection of characters

const myName = "Bolarinwa";
console.log(myName);
const myFavoriteFood = "Eba and Egusi Soup";
console.log(myFavoriteFood);
const sentence = `My name is ${myName} and my favorite food is ${myFavoriteFood}`;
console.log(sentence);

// String Methods
// Getting the length of a string
console.log(myName.length);

// charAt
console.log(myName.charAt(4));

// charCodeAt
console.log(myName.charCodeAt(3));

console.log("Bola".charCodeAt(3));
console.log("BOLA".charCodeAt(3));
console.log("bola".charCodeAt(0));
console.log("Bola".charCodeAt(0));

console.log("&(&*".charCodeAt(0));

// at
console.log("The string at index 3 is", myName.at(3));

// slice method
console.log(myName.slice(0, 4));

// substring method
console.log(myName.substring(0, 4));

// toUpperCase
console.log(myName.toUpperCase());

// toLowerCase
console.log(myName.toLowerCase());

console.log("Bolarinwa".toLowerCase() == "bolarInWa".toLowerCase());

// concat
console.log(myName.concat(" is a software developer"));

const theBestFootbaalInTheWorld = "    Barcelona       ";
console.log(theBestFootbaalInTheWorld.length);

// trim
console.log(theBestFootbaalInTheWorld);
console.log(theBestFootbaalInTheWorld.trim());
console.log(theBestFootbaalInTheWorld.trim().length);

// padStart
console.log("1".padStart(2, "0"));
console.log("1".padStart(3, "0"));
console.log("12".padStart(4, "a"));

// padEnd
console.log("1".padEnd(5, "0"));

// replace
const dbUrl = "https://www.google.com/<db_password>";
const password = "test1234";

console.log(dbUrl.replace("<db_password>", password));

// Split
console.log(sentence);
const sentenceTwo = "My-name-is-Jinadu-ELesho";
console.log(sentence.split(" "));

console.log(sentenceTwo.split(""));

// String search methods

// indexOf
console.log(myName.indexOf("a"));

// lastIndexOf
console.log(myName.lastIndexOf("A"));

// search
// console.log(myName.search())

// includes
console.log(myName.includes("Bolatito"));

// Assignment
// Question 1: Password Validator
// Write a function called validatePassword that takes a string as input and checks if it is a valid password based on the following criteria:

// Must be at least 8 characters long.
// Must contain at least one uppercase letter, one lowercase letter, and one number.
// Must not contain any spaces.
// If the password is valid, the function should return "Password is valid.", otherwise return "Password is not valid.".

// console.log("Welcome to strings in JavasScript");

// // Strings
// // Strings are a collection of characters

// const myName = "Bolarinwa";
// console.log(myName);
// const myFavoriteFood = "Eba and Egusi Soup";
// console.log(myFavoriteFood);
// const sentence = `My name is ${myName} and my favorite food is ${myFavoriteFood}`;
// console.log(sentence);

// // String Methods
// // Getting the length of a string
// console.log(myName.length);

// // charAt
// console.log(myName.charAt(4));

// // charCodeAt
// console.log(myName.charCodeAt(3));

// console.log("Bola".charCodeAt(3));
// console.log("BOLA".charCodeAt(3));
// console.log("bola".charCodeAt(0));
// console.log("Bola".charCodeAt(0));

// console.log("&(&*".charCodeAt(0));

// // at
// console.log("The string at index 3 is", myName.at(3));

// // slice method
// console.log(myName.slice(0, 4));

// // substring method
// console.log(myName.substring(0, 4));

// // toUpperCase
// console.log(myName.toUpperCase());

// // toLowerCase
// console.log(myName.toLowerCase());

// console.log("Bolarinwa".toLowerCase() == "bolarInWa".toLowerCase());

// // concat
// console.log(myName.concat(" is a software developer"));

// const theBestFootbaalInTheWorld = "    Barcelona       ";
// console.log(theBestFootbaalInTheWorld.length);

// // trim
// console.log(theBestFootbaalInTheWorld);
// console.log(theBestFootbaalInTheWorld.trim());
// console.log(theBestFootbaalInTheWorld.trim().length);

// // padStart
// console.log("1".padStart(2, "0"));
// console.log("1".padStart(3, "0"));
// console.log("12".padStart(4, "a"));

// // padEnd
// console.log("1".padEnd(5, "0"));

// // replace
// const dbUrl = "https://www.google.com/<db_password>";
// const password = "test1234";

// console.log(dbUrl.replace("<db_password>", password));

// // Split
// console.log(sentence);
// const sentenceTwo = "My-name-is-Jinadu-ELesho";
// console.log(sentence.split(" "));

// console.log(sentenceTwo.split(""));

// // String search methods

// // indexOf
// console.log(myName.indexOf("a"));

// // lastIndexOf
// console.log(myName.lastIndexOf("A"));

// // search
// // console.log(myName.search())

// // includes
// console.log(myName.includes("Bolatito"));

// Assignment
// Question 1: Password Validator
// Write a function called validatePassword that takes a string as input and checks if it is a valid password based on the following criteria:

// Must be at least 8 characters long.
// Must contain at least one uppercase letter, one lowercase letter, and one number.
// Must not contain any spaces.
// If the password is valid, the function should return "Password is valid.", otherwise return "Password is not valid.".

// Assigment solution

const validatePassword = (password) => {
  if (password.length < 8) {
    return "Password should be 8 characters or more";
  }

  const passwordArray = password.split("");
  console.log(passwordArray);
  let lowercase = false;
  let uppercase = false;
  let isNumber = false;
  let space = false;
  for (let i = 0; i < passwordArray.length; i++) {
    // console.log(passwordArray[i]);
    if (passwordArray[i] == " ") {
      space = true;
    }
    if (isNaN(passwordArray[i])) {
      //   console.log(passwordArray[i] + " is not a number");

      if (passwordArray[i] === passwordArray[i].toLowerCase()) {
        // console.log(passwordArray[i] + " is a lower case letter");
        lowercase = true;
      }
      if (passwordArray[i] === passwordArray[i].toUpperCase()) {
        // console.log(passwordArray[i] + " is a upper case letter");
        uppercase = true;
      }
    } else {
      isNumber = true;
    }
  }
  if (space) {
    return "Password should not contain space";
  }

  if (!uppercase) {
    return "Password should contain at least one uppercases";
  }
  if (!lowercase) {
    return "Password should contain at least one lowercase";
  }
  if (!isNumber) {
    return "Password should contain at least one number";
  }

  return "Password is valid";
};

console.log(validatePassword("Test 1234"));
console.log(validatePassword("Test1234"));
console.log(validatePassword("Testdhgfd"));
console.log(validatePassword("TEEEE234"));
console.log(validatePassword("reeeeee234"));

// console.log(isNaN("h"));

// console.log("a" === "a".toLowerCase());
// console.log("A" === "A".toUpperCase());

// console.log(" " === " ");

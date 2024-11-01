/*
Question 1: Number Guessing Game
Write a function called numberGuessingGame that:

Generates a random number between 1 and 100 (inclusive).
Prompts the user to guess the number.
Checks if the guess is correct:
If the guess is too low, display "Too low! Try again."
If the guess is too high, display "Too high! Try again."
If the guess is correct, display "Congratulations! You guessed the number in X attempts!" where X is the number of attempts taken.
The function should continue to prompt the user until they guess the correct number.
*/

/*
    Question 2: Palindrome Checker
Write a function named findPalindromes that takes an array of strings and returns a new array containing only the palindromes from the original array. A palindrome is a word that reads the same backward as forward.

Example:
findPalindromes(["madam", "apple", "racecar", "hello", "civic"]);
// Output: ["madam", "racecar", "civic"]
*/

// Task Solution
console.log("Task Solution");
// Question 1: Number Guessing Game

function numberGuessingGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  let userGuess;
  let attempts = 1;
  let guessed = false;
  while (!guessed) {
    userGuess = Number(prompt("Guess a number between 1 and 100"));
    if (userGuess < randomNumber) {
      alert("Too low! Try again.");
      attempts++;
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
      attempts++;
    } else {
      alert(`Congratulations! You guessed the number in ${attempts} attempts!`);
      guessed = true;
    }
  }
}

// numberGuessingGame();

// Question 2: Palindrome Checker
function checkPalindrome(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let reversedString = arr[i].split("").reverse().join("");
    if (arr[i] === reversedString) {
      result.push(arr[i]);
    }
    // console.log(reversedString);
  }
  console.log(result);
}

checkPalindrome(["madam", "apple", "racecar", "hello", "civic"]);

// Question 3: Anagram checker
const anagramChecker = (strOne, strTwo) => {
  let strOneArr = strOne.split("").sort().join("");
  let strTwoArr = strTwo.split("").sort().join("");
  // console.log(strOneArr);
  // console.log(strTwoArr);
  if (strOneArr === strTwoArr) {
    console.log("Anagram");
  } else {
    console.log("Not Anagram");
  }
};

anagramChecker("listen", "silent");
anagramChecker("recourse", "course");

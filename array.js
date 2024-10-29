console.log("Welcome to Arrays in JS");
const cars = ["Audi", "Lexus", "Benz", "Chevyy"];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

// cars = ["Lala", "Lolo"]; // throws an error
cars[2] = "Bugatti";

console.log(cars);

// cars[7] = "Honda"; // bad method
console.log(cars);

// Basic Array methods
// push method -> This push method is used to add an element to the end of the array

cars.push("Honda");
cars.push("Nissan");
console.log(cars);

// pop method - Used to remove an element from the end of the array
cars.pop();
console.log(cars);
cars.pop();
console.log(cars);

// unshift method -> This is used to add an element to the beginning of the array

cars.unshift("Lamborghini"); // AMen in JESUS name
console.log(cars);

cars.unshift("Korope");
console.log(cars);
// Shift -> Remove element from the beginnin of the array

cars.shift();
console.log(cars);

// Other Array Methods
// Getting the length of the array

const clubs = ["Barcelona", "ManCity", "Arsenal", "Gbadrid", "Gbayern"];
console.log(clubs);
console.log(clubs.length);

// Converting an array to string
console.log(clubs.toString());

console.log(clubs.join(" "));

const midClubs = ["Chelsea", "GbaU", "PSG"];
console.log(clubs.concat(midClubs));

// Splice method (mutates the original array)
console.log(clubs);
const gbaClubs = clubs.splice(
  3,
  2,
  "Atletico Madrid",
  "Liverpool",
  "Aston Villa"
);
console.log(gbaClubs);
console.log(clubs);

// Slice method
const goodClubs = clubs.slice(0, 3);
console.log(goodClubs);
console.log(clubs);

// Array search methods
// 1. Index of Method
const kopaTrophy = [
  "GOAT",
  "Isco",
  "Mbappe",
  "Bellignham",
  "Pedri",
  "Gavi",
  "YAMAL",
  "YAMAL",
];

console.log(kopaTrophy);

console.log(kopaTrophy.indexOf("Baby Goat"));
console.log(kopaTrophy.indexOf("GOAT"));
console.log(kopaTrophy.indexOf("Mbappe"));

// 2. Last Index of Method
console.log(kopaTrophy.lastIndexOf("YAMAL"));

// 3. Includes Method
console.log(kopaTrophy.includes("Gavi"));
console.log(kopaTrophy.includes("Baby Goat"));

// 4. Find Method
console.log("Find Method");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getNumbersGreaterThanFive(number) {
  return number > 5;
}

// console.log(getNumbersGreaterThanFive(6));
// console.log(getNumbersGreaterThanFive(3));

console.log(numbers.find(getNumbersGreaterThanFive)); // 6
console.log(numbers.find((number) => number > 8)); // 9
console.log(
  numbers.find(function (number) {
    return number > 9;
  })
); // 10

// const check = (number) => number > 8;

const names = [
  "Jumoke",
  "Biodun",
  "Shade",
  "Motun",
  "Bisola",
  "Adeola",
  "Bolutife",
];

function checkName(name) {
  return name.startsWith("M");
}

console.log(checkName("Bolutife"));
console.log(checkName("Jumoke"));
console.log(names.find(checkName));
console.log(names.find((name) => name.startsWith("A")));

// 5. Find Index Method
console.log("Find Index Method");
console.log(names.findIndex(checkName));
console.log(names.findIndex((name) => name.startsWith("A")));

// Arrsy Sort Method
console.log("Array Sort Method");
// 1. sort method
console.log(names.sort());
const numbersToSort = [10, 5, 3, 7, 2, 8, 1, 6, 4, 9, 200, 30, 1000];
console.log(numbersToSort.sort());
console.log(numbersToSort.sort((a, b) => a - b));

// 2. reverse method
console.log(names.reverse());
console.log(numbersToSort.reverse());

// 6. Filter Method
console.log("Filter Method");
const myBabes = names.filter((name) => name.startsWith("B"));
console.log(myBabes);
const studentScores = [40, 50, 60, 70, 80, 90, 100];
const excellentStudentsScores = studentScores.filter((score) => score > 70);

console.log(excellentStudentsScores);
const madridSupportersScore = studentScores.filter((score) => score <= 50);
console.log(madridSupportersScore);

// Array Iteration Methods

// 1. forEach Method
console.log("ForEach Method");
const productsDiv = document.getElementById("products");
const products = ["Shoe", "Bag", "Shirt", "Trouser", "Cap", "Wristwatch"];

products.forEach((item) => {
  console.log(item);
  productsDiv.innerHTML += `<p>${item}</p>`;
});

// 2. Map Method
console.log("Map Method");
const numbersToSquare = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbersToSquare.map((number) => number ** 2);
console.log(numbersToSquare);
console.log(squaredNumbers);

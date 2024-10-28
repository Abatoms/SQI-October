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

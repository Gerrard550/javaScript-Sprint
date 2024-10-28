// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive !");

// // const interface = "Audio";
// const private = "676";

// FUNCTIONS
// function logger() {
//   console.log("My name is Gerrard");
// }

// function job() {
//   console.log("I write codes for a living");
// }

// // calling/ running/ invoing functions
// logger();
// job();

// function fruitProcessor(apples, oranges, bananas) {
//   //   console.log(apples, oranges, bananas);
//   const juice = `Juice with ${apples} apples, ${oranges} oranges and ${bananas} bananas.`;
//   return juice;
// }

// const fruitJuice = fruitProcessor(4, 4, 2);
// console.log(fruitJuice);
// // console.log(fruitProcessor(4, 4, 2));

// // const healthyJuice = fruitProcessor(5, 3, 2);
// // console.log(healthyJuice);

// // Function Declaration
// const age1 = calcAge1(1990);

// function calcAge1(birthYear) {
//   return 2049 - birthYear;
// }

// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2049 - birthYear;
// };
// const age2 = calcAge2(1990);

// console.log(age1, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2049 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName, lastName, prize) => {
//   const age = 2049 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} ${lastName} retires in ${retirement} years with a ${prize} prize`;
// };
// console.log(yearsUntilRetirement(1990, "Biodun", "Ishola", "$1million"));
// console.log(yearsUntilRetirement(1990, "Biodun", "Ishola", "$1million"));
// console.log(yearsUntilRetirement(1990, "Biodun", "Ishola"));

// function cutFruitPieces(fruit) {
//   return fruit * 7;
// }

// function fruitProcessor(apples, oranges, bananas) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const bananaPieces = cutFruitPieces(bananas);

//   //   console.log(apples, oranges, bananas);
//   const juice = `Juice with ${applePieces} pieces of apples, ${orangePieces} pieces of oranges and ${bananaPieces} pieces of bananas.`;
//   return juice;
// }

// console.log(fruitProcessor(4, 3, 3));

// const calcAge = function (birthYear) {
//   return 2049 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName, lastName, prize) {
//   const age = 2049 - birthYear;
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(
//       `${firstName} ${lastName} retires in ${retirement} years with a ${prize} prize`
//     );
//     return retirement;
//   } else {
//     console.log(
//       `${firstName} ${lastName} has already retired without a ${prize} prize`
//     );
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1960, "Biodun", "Ishola", "$1million"));
// console.log(yearsUntilRetirement(1995, "Gerrard", "Shawn", "$1million"));

// Array

const friend1 = "Shola";
const friend2 = "Kunle";
const friend3 = "Simbi";
const friend4 = "Yewande";

const friends = ["Shola", "Kunle", "Simbi", "Yewande"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[3]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Femi";
console.log(friends);

friends[1] = "Yomi";
console.log(friends);

friends[2] = "Toyin, Ife, Lola";
console.log(friends);
// friends = ["Emeka", "Uche"];

const firstName = "Biodun";
const biodun = [firstName, "Ishola", 2030 - 1980, "Scientist", friends];
console.log(biodun);

// Exercise
const calcAge = function (birthYear) {
  return 2049 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// Method of Array
// Add element(Push and Unshift)

const friends = ["Shola", "Bimbo", "Muyiwa"];
const newLength1 = friends.push("Musa");
console.log(friends);
console.log(newLength1);

const newLength2 = friends.unshift("Tope");
console.log(friends);
console.log(newLength2);

// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive !");

// // const interface = "Audio";
// const private = "676";

// FUNCTIONS
function logger() {
  console.log("My name is Gerrard");
}

function job() {
  console.log("I write codes for a living");
}

// calling/ running/ invoing functions
logger();
job();

function fruitProcessor(apples, oranges, bananas) {
  console.log(apples, oranges, bananas);
  const juice = `Juice with ${apples} apples, ${oranges} oranges and ${bananas} bananas.`;
  return juice;
}

const fruitJuice = fruitProcessor(4, 4, 2);
console.log(fruitJuice);
// console.log(fruitProcessor(4, 4, 2));

const healthyJuice = fruitProcessor(5, 3, 2);
console.log(healthyJuice);

function calcAge1(birthYear) {
  return 2049 - birthYear;
}

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2049 - birthYear;
// };
// const age2 = calcAge2(1990);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2049 - birthYear;
};
const age2 = calcAge2(1990);

// Arrow function
const calcAge3 = (birthYear) => 2049 - birthYear;
const age3 =

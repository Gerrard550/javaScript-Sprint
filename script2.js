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
const calcAge3 = (birthYear) => 2049 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName, lastName, prize) => {
  const age = 2049 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} ${lastName} retires in ${retirement} years with a ${prize} prize`;
};
console.log(yearsUntilRetirement(1990, "Biodun", "Ishola", "$1million"));
console.log(yearsUntilRetirement(1990, "Biodun", "Ishola", "$1million"));
console.log(yearsUntilRetirement(1990, "Biodun", "Ishola"));

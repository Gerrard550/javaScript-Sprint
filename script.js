// console.log("Biodun");
// console.log("learning");
// console.log("Liverpool");
// console.log("David vs Goliath");

// let battlename = "David vs Goliath";
// console.log("battlename");

// let clubname = "Liverpool";
// console.log(clubname);

// let statusquo = "learning";
// console.log(statusquo);

// let stadium = "Wembley";
// console.log(stadium);
// console.log(stadium);
// console.log(stadium);
// console.log(stadium);
// console.log(stadium);

// let javascriptIsFun = "true";
// console.log(javascriptIsFun);

// console.log(typeof true);

// let population;
// console.log(population);
// console.log(typeof population);

// population = "200 000 000";
// console.log(typeof population);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1986;
// console.log(typeof year);

// MATH OPERATORS
// const now = 2024;
// const ageKris = now - 1960;
// const ageRachael = now - 1980;
// const ageBiodun = now - 1977;
// console.log(ageKris);
// console.log(ageRachael);
// console.log(ageKris, ageRachael, ageBiodun);

// console.log(ageBiodun / 3, ageKris * 2, ageRachael / 4);

// const ageIshola = ageKris * 2;
// const ageAgoro = ageRachael / 4;
// console.log(ageIshola, ageAgoro);

// const ageGerrard = ageIshola + ageAgoro;
// console.log(ageGerrard);

// const firstName = "Luis";
// const middleName = "Biodun";
// const lastName = "Diaz";
// console.log(firstName + " " + middleName + " " + lastName);

// // ASSIGNMENT OPERATORS
// let x = 10 + 5; //15
// x += 20; // x = x + 20 = 35
// x *= 4; // x = x * 4 = 140
// x /= 2; // x = x / 2 = 70
// x++; // x = x + 1 = 71
// x--; // x = x - 1 = 70
// console.log(x);

// // COMPARISON OPERATORS
// console.log(typeof ageKris < ageRachael);
// console.log(ageKris > ageRachael);

// STRINGS AND TEMPLATE LITERALS
// const firstName = "Steven";
// const job = "driver";
// const birthYear = 2000;
// const year = 2024;

// const Steven =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(Steven);

// const StevenNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(StevenNew);
// console.log(`Just a regular string...`);
// console.log(
//   "String with \n\
//  multiple \n\
// "
// );

// const age = 14;
// if (age >= 18) {
//   console.log(`Segun can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Segun is too young. Wait another ${yearsLeft} years 😥`);
// }

// const birthYear = 2014;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// TYPE CONVERSION AND COERCION

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("James"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + "23" + " years old");

// console.log("23" - "10" - "3");
// console.log("20" * "5");
// console.log("20" / "5");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// falsy

// 3 falsy values: 0, ''; undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("James"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// // Equality Operators
// // Strict equality Operator
// const age = 18;
// if (age === 18) console.log("You are now an adult(strict)");

// // Loose equality Operator
// if (age == 18) console.log("You are now an adult(loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 77) {
//   //77 === 77
//   console.log("Beautiful!!! 77 is a strong number");
// } else if (favourite === 70) {
//   console.log("70 is equally a strong number");
// } else if (favourite === 7) {
//   console.log("7 is the strongest number");
// } else {
//   console.log("Number is invalid or not strong enough");
// }

// if (favourite !== 77) console.log("Why not 77?");

// Boolean  Logic
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah can drive!!!");
// } else {
//   console.log("Someone else should drive...");
// // }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah can drive!!!");
// } else {
//   console.log("Someone else should drive...");
// }

// SWITCH STATEMENT
// const day = "saturday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesdsy":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record Videos");
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend 😎");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record Videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend 😎");
// } else {
//   console.log("Not a good day");
// }

// Conditional OPERATOR

const age = 15;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? "wine 🍷>" : "water 💧";

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// DATA 1
let markWeight = 78;
let markheight = 1.69;
let johnweight = 92;
let johnheight = 1.95;

// const markWeight = 95;
// const markheight = 1.88;
// const johnweight = 85;
// const johnheight = 1.76;

// console.log(markWeight);
// console.log(markheight);
// console.log(johnweight);
// console.log(johnheight);

// let markBMI = 78 / (1.69 * 1.69);
// let johmBMI = 92 / (1.95 * 1.95);

// console.log(markBMI, johmBMI);

// if (markBMI > johmBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI(${johmBMI})`);
// } else {
//   console.log(`John's BMI(${johmBMI}) is higher than Mark's BMI(${markBMI})!`);
// }

// // MUSA
// const occupation = "CryptoCurrency";
// const nickName = "Musadgreat1";
// const tokenMining = "hamsterKombat";
// const airdropStart = "2018";
// const airdropYear = "2024";
// const Musadgreat1 = `${nickName} Is a ${occupation} Lord who has been trading ${tokenMining} for ${
//   airdropYear - airdropStart
// } years.`;
// console.log(Musadgreat1);

// let weight = NaN;
// if (weight) {
//   console.log("YAY Weight is defined");
// } else {
//   console.log("Weight is UNDEFINED");
// }

// CHALLENGE #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Kaolas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both wins the trophy 🏆");
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Kaolas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both wins the trophy 🏆");
} else {
  console.log("No one wins the trophy 😭; Hence its a draw!");
}

// // DATA 1
// let markWeight = 78;
// let markheight = 1.69;
// let johnweight = 92;
// let johnheight = 1.95;

// // const markWeight = 95;
// // const markheight = 1.88;
// // const johnweight = 85;
// // const johnheight = 1.76;

// // console.log(markWeight);
// // console.log(markheight);
// // console.log(johnweight);
// // console.log(johnheight);

// // let markBMI = 78 / (1.69 * 1.69);
// // let johmBMI = 92 / (1.95 * 1.95);

// // console.log(markBMI, johmBMI);

// // if (markBMI > johmBMI) {
// //   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI(${johmBMI})`);
// // } else {
// //   console.log(`John's BMI(${johmBMI}) is higher than Mark's BMI(${markBMI})!`);
// // }

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
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Kaolas win the trophy 🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both wins the trophy 🏆");
// } else {
//   console.log("No one wins the trophy 😭; Hence its a draw!");
// }

//  CHALLENGE #4
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     bill + tip
//   }`
// );

// CHALLENGE #5

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(5, 6, 7));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(
//       `Dolphins win 🏆 with a score of (${avgDolphins} vs. ${avgKoalas})`
//     );
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(
//       `Koalas win 🏆 with a score of (${avgKoalas} vs. ${avgDolphins})`
//     );
//   } else {
//     console.log("No team wins...Hence draw!!!");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(222, 666);

// //  Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// CHALLENGE #6
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const calcTip = (bill) => (bill) =>
//   50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// ===========================================================================================================================

// // DATA 1
// let markWeight = 78;
// let markheight = 1.69;
// let johnweight = 92;
// let johnheight = 1.95;

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

// const mark = {
//   fullName: "Mark Miller",
//   weight: "78",
//   height: "1.69",
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: "92",
//   height: "1.95",
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(mark, john);

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi);
// console.log(
//   `${john.fullName}'s BMI (${john.bmi}) is lower than ${mark.fullName}'s BMI (${mark.bmi})`
// );

//  CHALLENGE #8

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + sum[i];
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is temp aplitude? Answer: difference between highest and lowest temp
// -How to compute max and min temperature
// - What's a sensor error?And what to do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// -Subtract min from max (amplitude) and return it.
// -- merge two arrays

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // MERGE 2 ARRAYS
// const calcTempAmplitudeNew = function (t1, t2, t3, t4) {
//   const temps = t1.concat(t2).concat(t3).concat(t4);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(
//   [3, 5, 1],
//   [9, 0, 5],
//   [7, -3, 12],
//   [-6, 22, 14]
// );
// // console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //     // C FIX
//     value: Number(prompt('Degrees celsius:')),
//   };

//   //   //B FIND
//   console.table(measurement);

//   //   // console.log(measurement.value);
//   //   // console.warn(measurement.value);
//   //   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // // A IDENTIFY
// // console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2, t3, t4) {
//   const temps = t1.concat(t2).concat(t3).concat(t4);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug(
//   [3, 5, 1],
//   [9, 0, 5],
//   [7, -3, 12],
//   [-6, 22, 14]
// );
// console.log(amplitudeBug);

// CHALLENGE #9

const data1 = [22, 21, 25];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}▫C...${data1[1]}▫C...${data1[2]}▫C...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}▫C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// function
function logger() {
  console.log("My name is Jonas");
}

// calling, running or invoking the function
logger();
logger();
logger();

// function fruitProcessors(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// fruitProcessors(5, 0);
// const appleJuice = fruitProcessors(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessors(5, 0));

// const appleOrangeJuice = fruitProcessors(2, 4);
// console.log(appleOrangeJuice);

// console.log(fruitProcessors(2, 4));

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// calcAge1(1991);
// console.log(calcAge1(1991));

// // or
// const age1 = calcAge1(1991);
// console.log(age1);

// function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   return `${firstName} retires in ${retirment}`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// FUNCTION CALLING FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessors(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessors(2, 3));

// function cutFruitPieces(apples, oranges) {
//   return apples * 4, oranges * 4;
// }

// function fruitProcessors(apples, oranges) {
//   const applePieces = cutFruitPieces(apples, oranges);
//   // const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and orange`;
//   return juice;
// }

// console.log(fruitProcessors(4, 5));good logical thinking but you will only get one answer, instead of two

const calaAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsretirement = function (birthYear, firstname) {
  const age = calaAge(birthYear);
  const retireMent = 65 - age;

  if (retireMent === 0) {
    console.log(`${firstname} retires in ${retireMent} years`);
    return retireMent;
  } else {
    console.log(`${firstname} has already retired`);
    return -1;
  }
};

const retirementYears = yearsretirement(1991, "Mike");
console.log(retirementYears);

// coding Challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin team won with ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won with ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("No team won");
  }
};

checkWinner(dolphinsAverage, koalasAverage);

// ARRAYS
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmed", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const y = new Array(1991, 1984, 1776);
// console.log(y);

// array exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2012, 2010];
console.log(calcAge(years)); //this will produce not a number

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age4);

const ages = [
  calaAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Array methods
const friends = ["Michael", "Steven", "Peter"];

// add element to the start of the array
friends.push("Jay");
console.log(friends);

// add element to the beginning of the array
friends.unshift("John");
console.log(friends);

// removes the last elemn=ent of an array
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

// removes the first element in array
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  console.log("Peter who?");
}

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("Steven who?");
}

// Challenge
// const calcTips = function (bills) {
//   if (bills >= 50 && bills <= 300) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// Introduction to Object

// reviewing arrays
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1993,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

console.log(jonasArray);

// object
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   bigCity: "New York",
//   smallCity: "Ibadan",
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const cityKey = "City";
// console.log(jonas["big" + cityKey]);
// console.log(jonas["small" + cityKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong Request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// // challenge
// //Jonas has 3 friends, and his best friend is called Michael
// console.log(
//   `${jonas.firstName} has ${friends.length} and his best friend is ${friends[0]}`
// ); //my solution which was correct, feel proud

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`
// ); //his solution

// object method
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  bigCity: "New York",
  smallCity: "Ibadan",
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // getSummary: function () {
  //   return;
  //   `${this.firstName} is a ${this.age} years old and he has ${this.hasDriversLicense}`;
  // },my solution, it was wrong because you can't assume that calcage was already called and you need a if statement for the boolean

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence`;
  },
};

console.log(jonas.getSummary());

console.log(jonas.calcAge());
console.log(jonas.age);

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

// Challenge 3
const mark = {
  firstName: "Mark",
  lastName: "Smith",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBMI());
console.log(mark.bmi);

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.92,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(john.calcBMI());
console.log(john.bmi);

if (john.johnBMI >= mark.markBMI) {
  console.log(`John's BMI ${john.calcBMI()} is greater than ${mark.calcBMI()}`);
} else {
  console.log(
    `Mark's BMI ${mark.calcBMI()} is greater the John's ${john.calcBMI()}`
  );
}

// loop
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const jonny = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonny[0]);
// console.log(jonny[1]);
// console.log(jonny[2]);

// for (let i = 0; i < 5; i++) {
//   console.log(jonny[i]);
// }

for (let i = 0; i < jonny.length; i++) {
  // reading from jonny array
  console.log(jonny[i], typeof jonny[i]);

  // filling type array
  // types[i] = typeof jonny[i];
  types.push(typeof jonny[i]);
}
console.log(types);

const year = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < year.length; i++) {
  age.push(2037 - year[i]);
}
console.log(age);

// continue and break
console.log("--ONLY STRINGS--");
for (let i = 0; i < jonny.length; i++) {
  if (typeof jonny[i] !== "string") continue;

  console.log(jonny[i], typeof jonny[i]);
}

console.log("--BREAK WITH NUMBER--");
for (let i = 0; i < jonny.length; i++) {
  if (typeof jonny[i] === "number") break;

  console.log(jonny[i], typeof jonny[i]);
}

// looping backward
const johny = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

for (let i = johny.length - 1; i >= 0; i--) {
  console.log(i, johny[i]);
}

// loop in a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weigth reetition ${rep}`);
  }
}

// WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end.....");
}

// coding challenges
// const calcTips = function (bills) {
//   if (bills >= 50 && bills <= 300) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTips(bills[i]);
//   tips.push(tips);
//   // totals.push.tips(tip[i] + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcaverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcaverage([totals]));

// problem solving
//we work for a company building a smart home thermometer. Our most recent task is this; "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes might be a sensor error"

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -what is temp amplitude? Answer: differnce betwwen highest and lowest temp
// -how to compute max and min temperatur
// what is a sensor error? And what to do?

// 2) Breaking to sub-problems
// -How to ignore error?
// -Find max value in temp array
// -Find min value in temp array
// -Substract min from max (amplitude) and return it

// const calcTempAmplitude = function (t1, t2) {
//   // reference from mdn
//   // const array1 = ["a", "b". "c"]
//   // const array2 = ["d", "e". "f"]
//   // const array3 = array1.concat(array2)

//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;

//     if (typeof curTemp !== "number") continue;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperature);
// const amplitudeNew = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// console.log(amplitude);

// debugging
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: prompt("Degree celsius:"),
//     // all values passed in a prompt comes back as a string, to convert it to a number you simply add number

//     value: Number(prompt("Degree celsius:")),
//   };

//   // console.log(measurement);
//   console.table(measurement);

//   // console.warn(measurement);
//   // console.error(measurement);
//   // console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// Identity the bug
// console.log(measureKelvin);
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees Celsius: ")),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Debugger tool
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;

    if (typeof curTemp !== "number") continue;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);

// challenge
// example: [17, 21, 23] print "... 17C in 1 days ...21C in 2 days ...23C in 3 days"

// Create a function "printForecast" which takes in an array "arr" and logs a spring like the above to the console

// Test data 1: [17, 21, 23]
// Test data 2: [17, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to spring, separated by ...
// - what is the X days? Answer: Index + 1

// 2) Breaking up into sub-problems
//  -Transform array into string
//  -Transform each element to string with C
// -Strings needs to contain day (index + 1)
// add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [17, 5, -5, 0, 4];

console.log(`...${data1[0]}C ...${data1[1]}C ... ${data1[2]}C ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }

  console.log("..." + str);
};

printForecast(data1);

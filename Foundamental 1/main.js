// values and variables
// console.log("jonas");
// console.log(23);

// let firstName = "jonas";
// console.log(firstName);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// Declaring variable; let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;

// var job = "programmer";
// job = "teacher";

// Basic operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = "jonas";
// const lastName = "Schmedtman";
// console.log(firstName + " " + lastName);

// assignment operator;
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 25 * 4 = 100
// x++; //x = x + 1 = 101;
// x--; //x = x - 1 = 100;
// x--; //x = x - 1 = 99;
// console.log(x);

// comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=

// operator precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// assignment: value and variable
// const country = "Nigeria";
// const continent = "Africa";
// let population = 200000000;
// console.log(country, continent, population);

// data type
// const isIsland = false;
// let language;
// console.log(isIsland, country, language);

// let, const and var
// language = "English";
// console.log(isIsland, country, language);

// Basic operators
// const countryAverage = population / 2;
// console.log(countryAverage);
// population++;
// console.log(population);

// const finlandPopulation = 6000000;
// const bothAverage = population >= finlandPopulation;
// console.log(bothAverage);

// const averagePopulationCountry = 33000000;
// const averageOfBoth = population <= averagePopulationCountry;
// console.log(averageOfBoth);

// console.log(
//   country +
//     " " +
//     "is in" +
//     " " +
//     continent +
//     " " +
//     "and its" +
//     " " +
//     population +
//     " " +
//     "people speak" +
//     " " +
//     language
// );

// first coding challenge
// BMI = mass / height ** 2;

// let markMass = 78;
// let markHeight = 1.69;
// let markBmi = 78 / 1.69 ** 2;
// console.log(markBmi);

// let johnMass = 92;
// let johnHeight = 1.95;
// let johnBmi = 92 / 1.95 ** 2;
// console.log(johnBmi);

// console.log(markBmi >= johnBmi);

// test 2
// let massMark = 95;
// let heightMark = 1.88;
// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// let johnmass = 85;
// let johnheight = 1.76;
// let johnbmi = johnmass / johnheight ** 2;
// console.log(johnbmi);

// console.log(bmiMark >= johnbmi);

// String and templete literal
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// multiple htmls with template literal
// console.log(`Strong with \n\
// multiple \n\
// lines`);

// Taking Decisions: IF / ELSE STATEMENTS
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// second challenge
let markMass = 78;
let markHeight = 1.69;
let markBmi = 78 / 1.69 ** 2;
console.log(markBmi);

let johnMass = 92;
let johnHeight = 1.95;
let johnBmi = 92 / 1.95 ** 2;
console.log(johnBmi);

console.log(markBmi >= johnBmi);

// question 1
if (markBmi > johnBmi) {
  console.log(`Mark's BMI is higher the John's`);
} else {
  console.log(`John's BMI is higher than Mark's `);
}

// question 2
if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
} else {
  console.log(`John's ${johnBmi} is higher than Mark's BMI ${markBmi}`);
}

// type conversion
// const inputYear = "1991";
// console.log(inputYear + 18);
// convert the string to a number
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas")); //JS gives NaN when a value that is uppose to give us a number doesn't give use that number

// console.log(String(23), 23);

// type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// truthy and falsely value
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// Equality operator
const age = 18;
// if ((age === 18)) {
//   console.log("The person just became an adult");
// }
// if (age === 18) console.log("You just became an adult (strict)");

// if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) {
//   console.log("Cool! 23 is an amazing number!");
// }

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23, 9 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// logical operators
// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B
// const isTired = true; //C

// console.log(hasDriversLicense && hasGoodVision);

// console.log(hasDriversLicense || hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Someone else should drive...");
// }

// if (hasDriversLicense && hasGoodVision && isTired) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Someone else should drive...");
// }

// //or
// if (hasDriversLicense || hasGoodVision) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Sarah can not drive yet");
// }

// if ((hasDriversLicense && hasGoodVision) || isTired) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Someone else should drive...");
// }

// coding challenge 3
// QUESTION 1
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
const minimumAverage = 100;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumAverage) {
  console.log("Dolphins's team won");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumAverage) {
  console.log("Koalas's team won");
} else console.log("No team won");

// BONUS 1
const dolphinAverage = (97 + 112 + 101) / 3;
const koalaAverage = (109 + 95 + 123) / 3;
const minAverage = 100;
console.log(dolphinAverage, koalaAverage);

if (dolphinAverage > koalaAverage && dolphinAverage >= minAverage) {
  console.log("Dolphin's team won");
} else if (koalaAverage > dolphinAverage && koalaAverage >= minAverage) {
  console.log("Koala's team won");
} else if (
  koalaAverage === dolphinAverage &&
  koalaAverage >= minAverage &&
  dolphinAverage >= minAverage
) {
  console.log("Draw");
} else console.log("No team won");

// BONUS 2
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
const minimumaverage = 100;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= minimumaverage) {
  console.log("Dolphins's team won");
} else if (averageKoalas > averageDolphins && averageKoalas >= minimumaverage) {
  console.log("Koalas's team won");
} else if (
  averageKoalas === averageDolphins &&
  averageKoalas >= minimumaverage &&
  averageDolphins >= minimumaverage
) {
  console.log("Draw");
} else console.log("No team won");

// SWITCH STATEMENT
const day = "thursday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// convert the above switch statement to else-if statement
const daysOfTheWeek = "sunday";

if (daysOfTheWeek === "monday") {
  console.log("Plan course structure");
} else if (daysOfTheWeek === "tuesday") {
  console.log("Prepare theory videos");
} else if (daysOfTheWeek === "wednesday" || daysOfTheWeek === "thursday") {
  console.log("Write code examples");
} else if (daysOfTheWeek === "friday") {
  console.log("Record Videos");
} else if (daysOfTheWeek === "saturday" || daysOfTheWeek === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// Expression and statement
3 + 4, 1991, true && false && !false;

// The Conditional (Ternary) operator
const yourAge = 23;

yourAge >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = yourAge >= 18 ? "wine" : "water";
console.log(drink);

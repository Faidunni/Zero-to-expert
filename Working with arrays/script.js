"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const trial = document.querySelector(".containerTrial");

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    containerMovements.innerHTML = "";

    const type = mov > 0 ? "Deposit" : "Withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
    `;

    // to insert this html to the main html page
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Slice method
// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// SPLICE METHOD
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2.sort());

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);

// // JOIN
// console.log(letters.join(" - "));

// // AT METHOD
// console.log(letters.at(0));

// // getting last array element
// console.log(letters.length - 1);
// console.log(letters.slice(-1));
// console.log(arr.at(-1));

// // LOOPING AN ARRAY WITH FOR EACH LOOP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// access the index og an array
// console.log("---- INDEX 0F ----");
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${movement}`);
//   }
// }
// console.log("------ FOR EACH -----");
// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// // WORKING THROUGH THE INDEX USING FOR EACH
// console.log(`---- FOR EACH INDEX ----`); //The names does not matter but the arrangement does
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // const UserInput = [
// //   "Faidunni",
// //   "Marv",
// //   "Akin",
// //   "John",
// //   "Ade",
// //   "Doyin",
// //   "Ayo",
// //   "Bidemi",
// //   "Faiz",
// //   "Adebayo",
// //   "Aisha",
// //   "Zainab",
// //   "Mubarak",
// //   "Faizat",
// // ];

// // const filteredUsernameStartWithA = [];
// // const filteredUsernameStartWithoutA = [];

// // // UserInput.forEach(function (name) {
// // //   if (UserInput.startsWith("A")) {
// // //     console.log(`You are sitting in the first row`);
// // //   } else {
// // //     console.log(`Don't seat on the first Row`);
// // //   }
// // // });WRONG

// // UserInput.forEach((names) => {
// //   if (UserInput.startsWith("A")) {
// //     filteredUsernameStartWithA.push(names);
// //   } else {
// //     filteredUsernameStartWithoutA.push(names);
// //   }
// // });
// // console.log(filteredUsernameStartWithA);
// // console.log(filteredUsernameStartWithoutA);

// // FOR EACH WITH SETS
// // const currencies = new Map([
// //   ["USD", "United States dollar"],
// //   ["EUR", "Euro"],
// //   ["GBP", "Pound sterling"],
// // ]);

// // currencies.forEach(function (value, key, map) {
// //   console.log(`${key}: ${value}`);
// // });

// // const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// // console.log(currencies);
// // currenciesUnique.forEach(function (value, key, map) {
// //   console.log(`${key}: ${value}`);
// // });

// CHALLENGE;

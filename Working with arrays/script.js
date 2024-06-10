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

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const displaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interest) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// EVENT HANDLER
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display Yall and welcome message
    console.log("LOGIN");

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input field
    inputLoginUsername = inputLoginPin.value = "";
    inputLoginPin.blur();

    // DISPLAY MOVEMENT
    displayMovements(currentAccount.movements);

    // DISPLAY BALANCE
    calcDisplayBalance(currentAccount.movements);

    // DISPLAY SUMMARY
    displaySummary(currentAccount);
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// MAP METHOD
const eurToUsd = 1.1;

// const movementUSD = movements.map(function(mov){
//   return mov * eurToUsd;
// })

// using arrow function
// const movementUSD = movements.map(mov =>
//   mov * eurToUsd
// )
// console.log(movements);
// console.log(movementUSD);

// const movementUSDfor = [];
// for(const mov of movements) movementUSDfor.push(mov * eurToUsd);
// console.log(movementUSDfor);

// const movemntdirection = movements.map((mov, i, arr) => {
//   if(mov > 0) {
//     return (`Movement ${i + 1}: You deposit ${mov}`)
//   } else {
//     return (`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//   }
// });
// console.log(movemntdirection)

// FILTER METHOD
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

// REDUCE METHOD
console.log(movements);

// Accumulator is like a snow ball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   concole.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 0);
// console.log(balance)

// USING ARROW FUNCTION
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// MAXIMUM VALUE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return;
  else return mov;
}, movements[0]);
console.log(max);

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// Find method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

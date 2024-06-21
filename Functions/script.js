'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123', 2, 800);
createBooking('LM123');
createBooking('LM123', 5);
createBooking('LM123', undefined, 1000);

// value vs reference
// const flight = 'LM234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2345898547,
// };

// const checkIn = function (flightNumber, passenger) {
//   flightNumber = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2345898547) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// console.log(flight, jonas);

// function accepting callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// Js uses callback all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// arrow function
const greetings = greet => name => console.log(`${greet} ${name}`);

const greetHey = greetings('Hello');
greetHey('Ade');

// the call and bind
const lufthansa = {
  airline: 'Lufthansa',
  iotacode: 'LM',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iotacode}${flightnum}`
    );
    // this.bookings.push({ flight: `${this.iotacode}${flightnum}`, name });
  },
};

lufthansa.book(239, 'Jonas  Schmed');
lufthansa.book(625, 'John smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eutowings',
  iotacode: 'EW',
  bookings: [],
};

const azmanAir = {
  airline: 'azman',
  iotacode: 'AZ',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 236, 'Goodness Paul');
console.log(lufthansa);
book.call(azmanAir, 112, 'Faizat Hazeez');
console.log(azmanAir);

const swiss = {
  airline: 'Swiss Air Line',
  iotacode: 'LX',
  bookings: [],
};

book.call(swiss, 345, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [546, 'George Cooper'];
book.apply(`swiss`, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven William');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value = value = value * 0.23;
console.log(addVAT(100));

// FUNCTION RETURNING FUNCTION
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));

// CHALLENGE
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // GET ANSWER
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')} \n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);
//   },
//   displayResults(type = 'array') {
//     if (type === 'string') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelectorAll('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// IIFE
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

// closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// EXAMPLE 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(g);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding ${wait} seconds`);
};

// CALLBACK FUNCTION
setTimeout(function () {
  console.log('Timer');
}, 1000);

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
});

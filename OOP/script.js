'use strict';

// CONSTRUCTOR
// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   //   console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. Naew {} is created
// // 2. Function is called,  this = {}
// // 3. {} linked to prototype
// // 4. {} automatically return

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// // PROTOTYPE
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// // it worked
// // Person.prototype.calcAge = function () {
// //   const curYear = new Date();
// //   const year = curYear.getFullYear();
// //   console.log(year - this.birthYear);
// // };

// // jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototypes (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.calcSpeed = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brakeSpeed = function () {
//   this.speed -= 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const BMW = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// BMW.calcSpeed();
// BMW.calcSpeed();
// BMW.calcSpeed();
// mercedes.calcSpeed();
// BMW.brakeSpeed();
// mercedes.brakeSpeed();

// class experssion
// class PersonCl = class{

// }

// CLASSES
// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //   Methods will be added to.prototype property
//   calcage() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.birthYear}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// jessica.calcage();
// console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// CHALLENGE
// class CarCl {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

// // GETTERS AND STARTERS
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// DATA VALIDATION
// class SomeoneCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //   Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // STATIC
//   static hey() {
//     console.log(`Hey there👨🏽‍🤝‍👨🏼`);
//     console.log(this);
//   }
// }

// const davis = new SomeoneCl('Jessica Davis', 1995);
// console.log(davis);
// const walter = new SomeoneCl('walter white', 2000);
// SomeoneCl.hey();

// STATIC METHOD
// Number.parseFloat(10);
// Person.hey = function () {
//   console.log(`Hey there`);
//   console.log(this);
// };

// Person.hey();

// OBJECT CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1987);
// sarah.calcAge;

// INHERITANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTION
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

// LINKING PROTOTYPE
Student.prototype = Object.create(Person.prototype);

Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// CHALLENGE
const CarCl = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

CarCl.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (name, speed, charge) {
  CarCl.call(this, name, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCl.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

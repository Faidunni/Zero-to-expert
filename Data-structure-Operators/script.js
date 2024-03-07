"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //open 24hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: openingHours,//the old method

  // ES6 enhanced object literals
  openingHours,

  // object creation of destructuring

  //the old way of writing object
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // new way of writing object without writing the function
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest1 = {
  name: "Capri",
  numguest: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest2.numguest = rest2.numguest || 10;
// rest1.numguest = rest1.numguest || 10;
// console.log(rest1);
// console.log(rest2);

// using the logical OR assignment operator
// rest2.numguest ||= 10;
// console.log(rest2);

// Using Nullish assignment operator
rest1.numguest ??= 10;
console.log(rest1);

rest2.numguest ??= 10;
console.log(rest2);

// rest2.owner = rest2.owner && "<ANNOYMOUS>";
// console.log(rest2);

// rest1.owner = rest1.owner && "<ANNOYMOUS>";
// console.log(rest1);

// USING THE AND ASSIGNMENT OPERATOR
rest1.owner &&= "<ANNOYMOUS>";
rest2.owner &&= "<ANNOYMOUS>";
console.log(rest1);
console.log(rest2);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring arr
const [x, y, z] = arr;
console.log(x, y, z);

// destructuring restaurant
const [first, second, third] = restaurant.categories;
console.log(first, second, third);

// to get the first and third element in the category
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// to switch the menu
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// return value from a function;
// const [start, mainCourse] = restaurant.order(2, 0);
// console.log(start, mainCourse);

//Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructuring OBJECT
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Defualt values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: w },
// } = openingHours;
// console.log(fri);
// console.log(o, w);

// // Spread Operator: this is used to expend an array into all its element
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join two arrays or more
// const joinMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinMenu);

// // spread with strings
// const str = "jonas";
// const letters = [...str, "", "s."];
// console.log(letters);
// console.log(...str);

// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Ingredient 2?`),
// //   prompt(`Ingredient 3?`),
// // ];

// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppa" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // Destructing using REST

// //SPREAD, because on RIGHT SIDE OF =
// const arra = [1, 2, ...[3, 4]];

// // REST: because on LEFT SIDE OF =
// const [g, h, ...other] = [1, 2, 3, 4, 5];
// console.log(g, h, other);

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...otherfood);

// // REST ON OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // FUNCTION USING REST
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i] / 2;
  console.log(sum);
};
add(2, 3);
add(5, 3, 4, 3);
add(2, 3, 4, 5, 7, 8, 9);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
// restaurant.orderPizza("mushroom");

// // SHORT CIRCUITING (&& AND ||)
// console.log(`---- OR ----`);
// console.log(3 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const food = restaurant.mainMenu ? restaurant.mainMenu : [];
// console.log(food);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log(`--- AND ---`);
// console.log(0 && "jonas");
// console.log(7 && "Jonas");

// console.log("Hello" && 23 && null && "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

// restaurant.orderPasta && restaurant.orderPasta("rice", "garri");

// //Nullish operator
// restaurant.numGuest = 0;
// const guest3 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest3);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// LOOPING ARRAYS: THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// const des = [restaurant.location, ...restaurant.categories];
// for (const info of des) console.log(info);

// for (const [v, hg] of des.entries()) {
//   console.log(`Our restuarant is at ${v} and we have ${hg} on the menu`);
// }

// OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);

// EXAMPLES
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? "Method dooes not exist");

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method dooes not exist");

// ARRAYS
const users = [
  {
    name: "Jonas",
    email: "hello@jonas.io",
  },
];

console.log(users[0]?.name ?? "User array empy");

console.log(users[3]?.name ?? "User array empy");

// LOOPING OBJECTS:OBJECT KEYS, VALUES, AND ENTRIES

// properties name
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// SETS
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");

for (const order of ordersSet) console.log(order);

// EXAMPLES
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);

// you can use spred operator on a set and this helps to convert sets to array
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// MAPS
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
rest.get(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);

const ary = [1, 2];
rest.set(ary, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(ary));

// MAP ITERATION
const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get(`correct`) === answer));

// converting Map to arrays
console.log([...question]);
console.log([...question.key()]);
console.log([...question.values()]);

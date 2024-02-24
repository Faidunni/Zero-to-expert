"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "steven";
      const str = `Oh, You are a millenial, ${firstName}`;
    }

    function add(a, b) {
      return a + b;
    }
  }
  console.log(add(2, 3));
  printAge();
  return age;
}

const firstName = "jonas";
// calcAge(1991);

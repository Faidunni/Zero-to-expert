const juliaDog = [3, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];

const copyJulia = juliaDog.slice(1, 3);
console.log(copyJulia);

console.log("----JULIA'S DOG");
copyJulia.forEach(function (checkDogs, i) {
  if (checkDogs >= 3) {
    console.log(`"Dog number ${i + 1} 
    is an adult, and is ${checkDogs}years old`);
  } else {
    console.log(`Dog number ${i + 1} is still a puppy 
    �`);
  }
});

console.log("----KATE'S DOG");
kateDog.forEach(function (checkDogs, i) {
  if (checkDogs >= 3) {
    console.log(`"Dog number ${i + 1} 
    is an adult, and is ${checkDogs}years old`);
  } else {
    console.log(`Dog number ${i + 1} is still a puppy 
    �`);
  }
});

// USING HIS METHOD FOR THE SECOND DATASET
// julia dog [9, 16, 6, 8, 3], kate dog[10, 5, 6, 1, 4]

const checkdogs = function (dogsjulia, dogkate) {
  const dogJuliaCorrected = dogsjulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(-2);
  console.log(dogJuliaCorrected);

  const dogs = dogJuliaCorrected.concat(dogkate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkdogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// challenge 2
// const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   return average;
// };

// converting to arrow
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

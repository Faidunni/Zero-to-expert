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

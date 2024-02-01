"use strict";

// console.log(document.querySelector(".message").textContent);

// // selecting and Manipulating element
// document.querySelector(".message").textContent = "🎉 Correct secretNumber!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".secretNumber").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// implemeting logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// handling click events
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there's no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // manipulating css
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.borderColor = "#000";
    document.querySelector(".number").style.width = "30rem";

    // when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// again my solution; it worked but unneccesarily long
// document.querySelector(".again").addEventListener("click", function () {
//   if (score > 1) {
//     document.querySelector(".score").textContent = 20;
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//     document.querySelector(".message").textContent = "Start guessing...";
//   } else if (score < 1) {
//     document.querySelector(".score").textContent = 20;
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//     document.querySelector(".message").textContent = "Start guessing...";
//   }
// });

// AGAIN BOTTON
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
});

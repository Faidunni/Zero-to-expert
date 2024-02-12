"use strict";

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

//Rolling dice; Reacting to clicking the roll dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generating a random dic roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display disc
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// holding score
btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;

    //scores[1] = scores[1] + currentScores
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >=100
    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceEL.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch in player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

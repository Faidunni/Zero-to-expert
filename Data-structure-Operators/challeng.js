// CHALLENGE 1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Destructuring
const player1 = game.players[0];
const player2 = game.players[1];
console.log(player1);
console.log(player2);

// REST OPERATOR
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const [gK, ...fieldplayers] = player2;
console.log(gK, fieldplayers);

// SPREAD OPERATOR
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// DESTRUCTURING THE OBJECT
// const { team1 } = game.odds;
// console.log(team1);

// const { team2 } = game.odds;
// console.log(team2);

// const { x: draw } = game.odds;
// console.log(draw);

// his method
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);
// console.log(game.odds);

// function
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// printGoals("Davies", "Muller");
printGoals(...game.scored);

// last question
team1 < team2 && console.log(`Team 1 is more likely to win`);

team1 > team2 && console.log(`Team 2 is more likely to win`);

// CHALLENGE 2
const scored = [...game.scored];
for (const [i, player] of scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// const oddsValue = Object.values(game.odds);
// console.log(oddsValue);

// const average = function (...odds) {
//   let sum = 0;
//   for (let i = 0; i < oddsValue.length; i++) sum += oddsValue[i] / 2;
//   console.log(sum);
// };My attempt, which was wrong

// 2. Calculating average
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {
  names: Object.values(game.scored),
};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// MAPS
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);
gameEvents
  .set(true, "First half")
  .set(false, "Second half")
  .set("First Half", 45)
  .set("Second Half", 97);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// other method
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// for (const [key, value] of gameEvents) {
//   gameEvents.get(gameEvents.get(gameEvents.get("First Half") > 45));
//   console.log([...gameEvents.get(true)]);
// }my method and it was wrong

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min} : ${event}`);
}

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// challenge 4

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   console.log(text);

  for (const [i, row] of rows) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

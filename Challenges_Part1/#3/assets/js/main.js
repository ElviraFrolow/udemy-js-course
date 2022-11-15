// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Data 1
const dolphins1 = (96 + 108 + 89) / 3;
const koalas1 = (88 + 91 + 110) / 3;
const winner = dolphins1 > koalas1;
if (dolphins1 && koalas1 <= 100) {
  console.log("NOBODY WINS");
} else if (koalas1 > dolphins1) {
  console.log(`Koalas win!`);
} else if (dolphins1 > koalas1) {
  console.log("Dolphin's win!");
} else {
  console.log(`DRAW!`);
}

console.log(dolphins1.toFixed(2), koalas1.toFixed(2));

// Data 2
const dolphins2 = (97 + 112 + 101) / 3;
const koalas2 = (109 + 95 + 123) / 3;
if (dolphins2 > koalas2) {
  console.log(`Dolphins win!`);
} else if (koalas2 > dolphins2) {
  console.log(`Koalas win!`);
} else {
  console.log(`DRAW!`);
}
console.log(dolphins2.toFixed(2), koalas2.toFixed(2));

// Data
const dolphins3 = (97 + 112 + 101) / 3;
const koalas3 = (109 + 95 + 106) / 3;
if (dolphins3 > koalas3) {
  console.log(`Dolphins win!`);
} else if (koalas3 > dolphins3) {
  console.log(`Koalas win!`);
} else {
  console.log(`DRAW!`);
}
console.log(dolphins3.toFixed(2), koalas3.toFixed(2));

const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt", "utf-8");
const allLines = fileContents.split(/\r?\n/);

//-- PART 1 --
// Find the Elf carrying the most total calories.
//-- METHOD #1
let totals = [0];
for (const line of allLines) {
	if (line !== "") {
		totals[totals.length - 1] += parseInt(line);
	} else {
		totals.push(0);
	}
}
const sorted = totals.sort((a, b) => {
	return b - a;
});
console.log(sorted[0]);

// //-- METHOD #2
// console.log(Math.max(...totals));

// //-- METHOD #3
// let maxNumber = 0;
// for (let total of totals) {
// 	if (total > maxNumber) {
// 		maxNumber = total;
// 	}
// }
// console.log(maxNumber);

//-- PART 2 --
// Find the top 3 Elves and how many they are carrying in total.
let topThree = sorted.slice(0, 3);
console.log(topThree);

const sum = topThree.reduce((a, b) => a + b, 0);
console.log(sum);

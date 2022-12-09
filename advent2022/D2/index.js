const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt", "utf-8");
const allLines = fileContents.split(/\r?\n/);

//-- PART 1 --

// POINTS: Rock - 1, Paper - 2, Scissors - 3
// A or X - Rock
// B or Y - Paper
// C or Z - Scissors

// Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

let drawArray = [];
let lossArray = [];
let winArray = [];
let drawCount = 0;
let lossCount = 0;
let winCount = 0;
let rockPoints = 0;
let paperPoints = 0;
let scissorsPoints = 0;
// Draw would be AX, BY, CZ (3 points)
for (const line of allLines) {
	if (line == "A X") {
		drawArray.push(line);
		drawCount++;
		rockPoints++;
	} else if (line == "B Y") {
		drawArray.push(line);
		drawCount++;
		paperPoints += 2;
	} else if (line == "C Z") {
		drawArray.push(line);
		drawCount++;
		scissorsPoints += 3;
	}
}
let drawPoints = drawCount * 3;

// Losing combos are BX, AZ, CY (0 points)
for (const line of allLines) {
	if (line == "B X") {
		lossArray.push(line);
		lossCount++;
		rockPoints++;
	} else if (line == "C Y") {
		lossArray.push(line);
		lossCount++;
		paperPoints += 2;
	} else if (line == "A Z") {
		lossArray.push(line);
		lossCount++;
		scissorsPoints += 3;
	}
}
let lossPoints = lossCount * 0;

// Winning combos are CX, AY, BZ (6 points)
for (const line of allLines) {
	if (line == "C X") {
		winArray.push(line);
		winCount++;
		rockPoints++;
	} else if (line == "A Y") {
		winArray.push(line);
		winCount++;
		paperPoints += 2;
	} else if (line == "B Z") {
		winArray.push(line);
		winCount++;
		scissorsPoints += 3;
	}
}
let winPoints = winCount * 6;

const totalShapePoints = rockPoints + paperPoints + scissorsPoints;
const totalPoints = drawPoints + winPoints + totalShapePoints;
console.log("PART ONE FINAL POINTS: ", totalPoints);

//-- PART 2 --
// The second column says how the round needs to end:
// X = lose, Y = draw, Z = win
// Draw: 3 - Loss: 0 - Win: 6

// POINTS: Rock - 1, Paper - 2, Scissors - 3
// A or X - Rock
// B or Y - Paper
// C or Z - Scissors

let partTwoScoreTotal = 0;
for (const line of allLines) {
	if (line.includes("X")) {
		// lose - 0pts
		if (line.includes("A")) {
			// scissors
			partTwoScoreTotal += 3;
		} else if (line.includes("B")) {
			// rock
			partTwoScoreTotal += 1;
		} else if (line.includes("C")) {
			// paper
			partTwoScoreTotal += 2;
		}
	} else if (line.includes("Y")) {
		// draw
		partTwoScoreTotal += 3;
		if (line.includes("A")) {
			// rock
			partTwoScoreTotal += 1;
		} else if (line.includes("B")) {
			// paper
			partTwoScoreTotal += 2;
		} else if (line.includes("C")) {
			// scissors
			partTwoScoreTotal += 3;
		}
	} else if (line.includes("Z")) {
		// win
		partTwoScoreTotal += 6;
		if (line.includes("A")) {
			// paper
			partTwoScoreTotal += 2;
		} else if (line.includes("B")) {
			// scissors
			partTwoScoreTotal += 3;
		} else if (line.includes("C")) {
			// rock
			partTwoScoreTotal += 1;
		}
	}
}

console.log(partTwoScoreTotal);

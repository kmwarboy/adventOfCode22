const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt", "utf-8");
const allLines = fileContents.split(/\r?\n/);

// PART 1
let priorityTotal = 0;
for (const line of allLines) {
	// split each string in half first
	const halfCount = line.length / 2;

	// put the first half in an array of items, one for each letter
	const firstHalf = line.substring(0, halfCount).split("");
	// second half in a string
	const secondHalf = line.substring(halfCount);

	// use the first half array to check if any of the items match a part of the second half string
	const matchingItem = firstHalf.find((item) => secondHalf.includes(item));

	// regex for upper and lower case letters to filter the matching items by type
	const lowerCaseRegex = RegExp(/[a-z\s]+/);
	const upperCaseRegex = RegExp(/[A-Z\s]+/);

	if (matchingItem.match(lowerCaseRegex)) {
		// character code for 'a' is 97, but for a to equal 1 point we need to subtract only 96 from the character code,
		// and every subsequent letter after will have a larger point value (i.e. char code for b is 98, because 98-96=2, b is 2 pts. etc.)
		priorityTotal += matchingItem.charCodeAt(0) - 96;
	} else if (matchingItem.match(upperCaseRegex)) {
		// similar idea as above, but ebcasue uppercase points start at 27 for the problem, we need to add back 27 after we subtract the A character code value
		priorityTotal += matchingItem.charCodeAt(0) - 65 + 27;
	}
}

console.log(priorityTotal);

// PART 2

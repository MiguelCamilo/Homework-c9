// Date 01/10/22

// Write a function that adds two numbers together
function sum(x = 0, y = 0) {
	const add = x + y;
	return add;
}
console.log(sum(5, 5)); // 10

// Write a function that returns the SQUARE of a number
function squarePants(spongeBob) {
	const heWasNumber1 = spongeBob ** 2;
	return heWasNumber1;
}
console.log(squarePants(2));

// Create an object called student and add 3 properties with their values.
const student = {
	institution: "Boca Code: ",
	level: "Baby Duck 🐣",
	status: "...loading FULL STACK SOFTWARE ENGINEER",
};
console.log(student.institution, student.level, student.status);

/*
 Given any array of numbers (all will be > 0),
write a function that returns the number of odd
numbers in the array.
*/

const myArray = [
    17,
    24, 
    69, 
    86, 
    42, 
    13, 
    11
];

function findOdd(list) {

    let newArray = [];
    
    // this will run through the array.length
	for (let i = 0; i < list.length; i++) { 
        // checks each el=ement in list to see if it returns 1 and if true pushes to new newArray
        if (list[i] % 2 === 1) {
            newArray.push(list[i])
		}
	}
	return newArray.length;
}

const numOdd = findOdd(myArray); // should return 4
console.log(`The amount of odd numbers in the array are: ${numOdd}`);

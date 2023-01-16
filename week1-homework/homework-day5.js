//! Create a function which returns the number of true values there are in an array.

const clog = log => console.log(log);

const testArray = [
	true, // 
	false,
	false,
	true, //
	false,
	false,
	false,
	true, //
	true, //
	true, //
	false,
];

const trueInArr = (arr) => {
	let counter = 0
	
    // run through array and check each value
    for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] === true ) {
			 counter++
		}
		return counter
    }
}h
clog(trueInArr(testArray))



//! 2. Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.

const combineTwoArrays = (arr1,arr2) => { 

	// using spread operators to create a new array
	// and combine them
	return combine = [...arr1 , ...arr2] 

}
clog(combineTwoArrays([1,2],[3,4]))


//! 3. You are given 2 arrays, one called shoppingList and one called cart.
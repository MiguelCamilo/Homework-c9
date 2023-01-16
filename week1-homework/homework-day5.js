//! Create a function which returns the number of true values there are in an array.

const clog = log => console.log(log);

const testArray = [ // solve if arr has a string 'true'
	true, // 
	false,
	false,
	true, //
	false,
	'false',
	'true',
	true, //
	1, //
	true, //
	0,
];

const trueInArr = (arr) => {
	const trueArr = []

    // run through array and check each value
    for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] === true ) {

			 trueArr.push(arr[i]) // push booleans into trueArr
		}
    }
	return trueArr.length // return the amount of booleans in the trueArr
}
clog(trueInArr(testArray))



//! 2. Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.

const combineTwoArrays = (arr1,arr2) => { 

	// using spread operators to create a new array
	// and combine them
	return combine = [...arr1 , ...arr2] 

}
clog(combineTwoArrays([1,2],[3,4]))


//! 3. You are given 2 arrays, one called shoppingList and one called cart. Create a new version of shoppingList where the items in the cart have been removed. 

const shoppingList = ['beer','milk','wine','bananas','sugar']
const cart = ['milk','beer']

const addedToCart = (list,cart) => {
	const newShoppingCart = []
}
clog(addedToCart(shoppingList,cart))
/* 
1. Create a function that takes an array of numbers and returns a new array with the square of each number.
2. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score. Console.log the results.
3. Create a function that converts a string to uppercase letters. Console.log the results
*/

//! 1.
const clog = (log) => console.log(`${log}`)

const numArray = [2,4,6,8,10]


const squared = (oldArray) => {
    // using .map() will return a new array 
    // with the met condition provided
    // in this case a new arr with values squared
    const newArray = oldArray.map((n) => {
        return n ** 2 
    })
    //TODO: ask if this a valid method of using  the spread operator */
    return [...newArray]
}

clog(squared(numArray))


//! 2.

const totalPoints = (twoPointers, threePointers) => {
    const points2 = twoPointers * 2
    const points3 = threePointers * 3

    return points2 + points3
}

clog(totalPoints(5,10))


//! 3. 

const convertString = (convert) => {
    return convert.toUpperCase()
}   

clog(convertString('say it with your chest!'))
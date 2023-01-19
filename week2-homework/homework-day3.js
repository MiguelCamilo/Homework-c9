// Write a function that takes your age in years and returns your age in minutes.
// AgeInMin = AgeInYears * 365 * 1440

// const ageToMin = (age) => {
//     const convert = ( age * 365 ) * 1440
//     return  convert.toLocaleString() // returns the number in a string format seperated with commas
// }
// const age = 27
// console.log(`Did you know theres is ${ageToMin(age)} minutes in the age ${age}!`)




// Write a function that takes in an array of numbers and returns the sum of all even numbers.

const array_of_nums = 
[
    1,
    2, //
    3,
    4, //
    5,
    6, //
    7,
    8, //
    9,
    10 //
]


// this func returns all even nums in the array
const even_in_arr = (array) => {
    const evenArray = []
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
        }
    }
    
    return evenArray
}

// this func adds all the even nums together
const sum_of_even = (evenArr)  => {

    // let sum = evenArr[0] // the reason this returns 32 instead of 30 is because it will start at the index[0] which is 2 and will add 2 to 2 then proceed to add the rest together
    
    let sum = 0
    for (let j = 0; j < evenArr.length; j++) {
        sum += evenArr[j]
    }
    return sum
}

// here we are invoking the func sum. then passing the func even. 
console.log(sum_of_even(even_in_arr(array_of_nums)))


// Using Firestore, create a collection of your favorite childhood toys/games(at least 5)
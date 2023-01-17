// 1. Write a function that takes an integer minutes and converts it to seconds.

//TODO: try to check for user error
const convertMinToSec = (min) => {

    return min * 60
}

const minutes = 2
console.log(`There is ${convertMinToSec(minutes)} seconds in ${minutes} minutes`)


// 2. Write a function that converts hours into seconds.

const convertHourToSec = (hour) => {

    return ( hour * 60 ) * 60
}

const hours = 2
console.log(`There is ${convertHourToSec(hours)} seconds in ${hours} hours`)

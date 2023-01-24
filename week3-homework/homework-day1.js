/* 
    Write a function  that takes in an array of numbers as a parameter and uses the .forEach() method to double the value of all even numbers in the array.
     The function should not use any other loops or array methods.
*/

const nums = [1,2,3,4,5,6,7,8,9,10]

const addAllEven = (array) => {
    // func to loop through the array
    const doubleEven = array.forEach( (element) => {

        // checks if nums in the array are 
        // even by checking if they are divisible by 2
        if (element % 2 === 0) {
            // takes the even nums and
            // squares them
            const result  = element ** 2
            console.log(result)
        }
    })
    return doubleEven // return doubled even nums
}

addAllEven(nums)


/* 
Write a function that takes the array below and modifies its order as follows:

•Remove the first element
•Add your dream car as the new first element
•Remove the last element
•Add your first car as the new last element
*/

let myDreamCars = ["Charger", "Cayenne", "Cyber Truck", "G Wagon", "Civic"]

const cars = (array) => {
    array.shift()
    array.unshift("Porsche GT3")
    array.pop()
    array.push("Honda Civic 1995")
    return array
}

console.log(cars(myDreamCars))

// Create an object with your name, age and indicate (as a boolean) whether or not you are feeling confident. 

person = {
    name: 'Miguel',
    age: 27,
    confident: true
}

person['name'] = 'James' // another valid way of mutating an object
console.log(person)


// Write a function that adds two numbers (return the result):
const addTwoNum = (num1,num2) => {
    return num1 + num2
}

console.log(addTwoNum(5,5))


// Write a function that counts up from 1 to 10: (Hint: loops)

const loop = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}`)
    }
}

loop()

// ! Review this: What are 'falsey statements'

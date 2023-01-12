// Date 01/11/23

// 1. Using your loop of choice. Create a function that prints the pyramid below. (Show your personality by using your favorite emoji)
function cloudPyramid() {
    let space = '';
    for (let i = 0; i < 5; i++) {
        space += '❤️'
        console.log(space)
    }
}
cloudPyramid();

// 2. Create a function that removes the first element of the array below and adds “kiwi” to the end of the array
let favoriteFruits = ["mango","lychee", "rambutan","papaya"]

function fruits(fruitArr) {

    const removeFirst = fruitArr.shift() // removes first element in an arr
    fruitArr.push('kiwi')
    return removeFirst

}
const result = fruits(favoriteFruits)

console.log(result)
console.log(favoriteFruits)

/* BONUS
 Write a function named assignGrade, that takes one argument, a number score.
 Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Invoke that function for a few different scores and log the result to make sure it works.
*/

const letterGrade = ["A", "B", "C", "D", "F"]; // storing letter grades in an arr

function assignGrade(score) {

    if (score >= 90 && score <= 100 ) {
        
        console.log(`Grade: ${letterGrade[0]}`)

    } else if (score >= 80 && score <= 89) {

        console.log(`Grade: ${letterGrade[1]}`)

    } else if (score >= 70 && score <= 79) {

        console.log(`Grade: ${letterGrade[2]}`)

    } else if (score >= 60 && score <= 69) {

        console.log(`Grade: ${letterGrade[3]}`)

    } else if (score >= 50 && score <= 59) {

        console.log(`Grade: ${letterGrade[4]}`)

    }else {
        console.log('You Failed!')
    }
}
assignGrade(75);

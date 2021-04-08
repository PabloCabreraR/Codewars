// INSTRUCTIONS

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]


// SOLUTIONS
const digitize = (n) => {
    let nArray = n.toString().split('')
    let resultNArray = nArray.map((number)=>Number(number))
    return resultNArray.reverse()
}
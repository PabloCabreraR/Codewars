// INSTRUCTIONS

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// SOLUTION
const countBits = function(n) {
    let binaryN = n.toString(2).split('')
    let counter = 0
    binaryN.forEach((number)=>{
      if (number === '1') counter++
    })
    return counter
  };
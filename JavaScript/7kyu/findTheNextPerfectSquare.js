// INSTRUCTIONS

// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect


// SOLUTION
const findNextSquare = (n) => {
    if (Math.floor(Math.sqrt(n)) - Math.sqrt(n) === 0){
      let number = Math.sqrt(n)
      number++
      return number*number
    }else{
      return -1
    }
  }
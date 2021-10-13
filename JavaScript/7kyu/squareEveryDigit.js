// INSTRUCTIONS

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


// SOLUTION
function squareDigits(num){
    let arr = num.toString().split('')
    console.log(arr)
    let result = arr.map((number)=>{
      let stringToNumber = parseInt(number)
      return stringToNumber*stringToNumber
      })
    return Number(result.join(''))
  }
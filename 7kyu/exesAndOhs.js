// INSTRUCTIONS

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// SOLUTIONS
function XO(str) {
    let arr = str.toLowerCase().split('')
    let countO = 0
    let countX = 0
    if (!arr.includes('x') && (!arr.includes('o'))){
      return true
    }else{
      for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'x'){
          countX++
        }else if (arr[i] === 'o'){
          countO++
        }
      }
      return (countX == countO) ? true : false
    }
}
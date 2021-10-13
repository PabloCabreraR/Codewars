// INSTRUCTIONS

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// SOLUTIONS
const XO = (str) => {
  const strArray = str.toLowerCase().split('')
  const numberOfO = strArray.reduce((acc, el)=> el == "o" ? acc+=1 : acc, 0)
  const numberOfX = strArray.reduce((acc, el)=> el == "x" ? acc+=1 : acc, 0)
  return numberOfO === numberOfX
}
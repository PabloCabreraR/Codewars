// INSTRUCTIONS

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F


// SOLUTION
function abbrevName(name){
    let firstLetter = name.slice(0,1).toUpperCase()
    let secondLetter = name.split(" ")[1].slice(0, 1).toUpperCase()
    return `${firstLetter}.${secondLetter}`
  }
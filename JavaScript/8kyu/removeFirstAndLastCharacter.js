// INSTRUCTIONS

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// SOLUTIONS
function removeChar(str){
    let strArray = str.split('')
    strArray.splice(0,1)
    strArray.splice(strArray.length-1, 1)
    return strArray.join('')
  };

  
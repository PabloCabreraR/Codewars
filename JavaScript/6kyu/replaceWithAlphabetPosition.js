// INSTRUCTIONS

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


// SOLUTION
const alphabetPosition = (text) => {
    const textPosition = text.split(" ").map((word)=>{
      return word.toLowerCase().split("").filter((letter)=>{
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123 && letter.charCodeAt(0) !== "NaN"){
          return letter
        }
      }).join(" ")
    }).join(" ")
    const result = textPosition.split(" ").map((letter)=> {return letter.charCodeAt(0)-96})
    for (let i = 0; i < result.length; i++){
      if (!result[i]) result.splice(i, 1)
    }
    return result.join(" ")
  }
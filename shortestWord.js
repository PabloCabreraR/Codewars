// INSTRUCTIONS

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// SOLUTION
function findShort(s){
    return s.split(' ').reduce((acc, word)=>{
      if (word.length < acc){
        acc = word.length
      }
      return acc
    }, 1000)
  }
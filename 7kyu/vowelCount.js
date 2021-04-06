// INSTRUCTIONS

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


// SOLUTION
function getCount(str) {
    let vowelsCount = 0
    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    }
    for (let i = 0; i < str.length; i++) {
      let letter = str[i]
      if (vowels[letter]) {
        vowelsCount++
      }
    }
    return vowelsCount
  }
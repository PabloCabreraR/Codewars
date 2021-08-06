// INSTRUCTIONS

// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:
// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''
// More examples in the test cases. Good luck!


// SOLUTIONS

const solve = (s, k) => {
    const str = s.split("").sort().slice(0, k)
    const obj = {}
    str.map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1))
    
    s = s.split("").map((el, i, arr) => {
      if (obj[el] > 0) {
        obj[el]--
        return ""
      }else{
        return el
      }
    })
    
    return s.join("")
  }
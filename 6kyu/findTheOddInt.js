// INSTRUCTIONS

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.



// SOLUTION
function findOdd(A) {
    const counters = {}
    A.forEach((number)=>{
      if (counters[number]){counters[number]++}
      else {counters[number]=1}
    })
    for (let num in counters){
      if (counters[num]%2 === 1) return Number(num)
    }
  }
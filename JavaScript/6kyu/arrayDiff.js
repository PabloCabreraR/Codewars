// INSTRUCTIONS

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// SOLUTION
const arrayDiff = (a, b) => {
    if (!a.length) return [] 
    if (!b.length) return a
    a.forEach((num, index)=> b.includes(num) ? a.splice(index,1) : null)  
    b.forEach(number=> a.includes(number) ? arrayDiff(a,b) : null)
    return a
  }

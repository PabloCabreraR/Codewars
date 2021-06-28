// INSTRUCCTIONS

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]


// SOLUTION
const flatten = (array) => array.reduce((acc, e) => acc.concat(e), [])
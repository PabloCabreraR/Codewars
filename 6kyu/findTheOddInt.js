// INSTRUCTIONS

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.



// SOLUTION

const findOdd = (Arr) => Arr.find((check) => Arr.filter((num) => check === num).length % 2 === 1)
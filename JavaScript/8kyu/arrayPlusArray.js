// INSTRUCTIONS

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// SOLUTION
function arrayPlusArray(arr1, arr2) {
    const num1 = arr1.reduce((acc, num)=>{return acc+num}, 0)
    const num2 = arr2.reduce((acc, num)=>{return acc+num}, 0)
    return num1 + num2
}
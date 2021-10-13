// INSTRUCTIONS

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)


// SOLUTION
function solution(number){
    if (number <= 0) return 0;
    
    const list = []
    
    for (let i = 0; i < number; i++){
      if (i%5==0){list.push(i)}
      else if(i%3==0){list.push(i)}
    }
    
    const sum = list.reduce((acc, number)=>{return (acc + number)},0)
    
    return sum
  }


// ALTERNATIVE SOLUTION
  function solution(number){
    let sum = 0;
    for(var i = 1; i < number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
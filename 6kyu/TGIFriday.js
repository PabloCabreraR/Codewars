// INSTRUCTIONS

// We all love fridays, and even better if it is the last day of the month!
// In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.
// Your work is to return the number of times a month ends with a Friday.
// If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!
// For example, between 1901 and 2000, a month ends on Friday 171 times.


// SOLUTION
function lastDayIsFriday(initialYear, endYear) {
    let totalFridays = 0
  
    if (endYear === undefined) endYear = initialYear
    
    for (let i = initialYear; i <= endYear; i++) {
      for (let k = 1; k <= 12; k++) {
        
        let d = new Date(i, k, 0)
        
        
        if (d.getDay() === 5) totalFridays++
      }
    }
    
    return totalFridays
  }
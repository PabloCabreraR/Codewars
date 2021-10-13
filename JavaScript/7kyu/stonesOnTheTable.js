// INSTRUCTIONS

// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.
// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.
// Examples:
// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9


// SOLUTION
function solve(stones) {
  const stonesArray = stones.split('')
  if (stonesArray.length === 0){
    return 0   
  }else{
    const stonesArrayWithoutRepeated = stonesArray.filter((stone, index)=>{
      return stonesArray[index] !== stonesArray[index-1]
    })
    stonesArrayWithoutRepeated.join('')
    return (stonesArray.length - stonesArrayWithoutRepeated.length)
  }
}
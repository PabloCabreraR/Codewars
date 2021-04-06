// INSTRUCTIONS

// Given the string representations of two integers, return the string representation of the sum of those integers.
// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// SOLUTION

const reverseArr = s => s.split("").reverse();

function sumStrings(a, b) {
   [a, b] = [reverseArr(a), reverseArr(b)];
   let carry = 0;
   const arr = []
   const [mx, mn] = (a.length >= b.length) ? [a, b] : [b, a];
   mx.forEach((itm, idx) => {
      let sm = Number(itm) + (Number(mn[idx]) || 0) + carry;
      [sm, carry] = sm > 9 ? [sm%10, 1] : [sm, 0];
      arr.unshift(sm)
   })
   if (carry) arr.unshift(carry);
   return arr.join("").replace(/^(0+)/, "");
}
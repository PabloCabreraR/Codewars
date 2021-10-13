// INSTRUCCTIONS

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


// SOLUTIONS
const validParentheses = (parens) => {
    const check = () => {
      for (let i = 0; i < parens.length - 1; i++) {
        if (parens[i] === "(" && parens[i + 1] === ")") {
          parens = parens.slice(0, i) + parens.slice(i + 2);
          check();
        }
      }
    }
    check();
    return parens.length === 0;
  }
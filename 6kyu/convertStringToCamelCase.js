// INSTRUCTIONS

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// SOLUTION
const toCamelCase = (str) => {
    if (str.length === 0) return ''
    if (str.includes('_')){
      return str.split('_').map((word, index)=>{
        if (index > 0){
          let ini = word.slice(0,1).toUpperCase()
          return ini+word.slice(1)
        }else{
          return word
        }
      }).join('')
    }else{
      return str.split('-').map((word, index)=>{
        if (index > 0){
          let ini = word.slice(0,1).toUpperCase()
          return ini+word.slice(1)
        }else{
          return word
        }
      }).join('')
    }
}
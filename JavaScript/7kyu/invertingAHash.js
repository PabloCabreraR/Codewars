// INSTRUCTIONS

// Given a Hash made up of keys and values, invert the hash by swapping them.


// SOLUTION
const invertHash = (hash) => {
    const newObj = {}
    for (let key in hash){
        const value = hash[key]
        newObj[value] = key
    }
    return newObj
}
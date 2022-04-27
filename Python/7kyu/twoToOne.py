# INSTRUCTIONS

# Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"
# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

# SOLUTION

def longest(a1, a2):
    newWord=''
    for letter in a1:
        if letter not in newWord:
            newWord=newWord+letter
    for letter in a2:
        if letter not in newWord:
            newWord=newWord+letter
    return ''.join(sorted(list(newWord)))
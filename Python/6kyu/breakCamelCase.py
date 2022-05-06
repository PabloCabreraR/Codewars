#INSTRUCTIONS

# Complete the solution so that the function will break up camel casing, using a space between words.
# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

#SOLUTION

def solution(s):
    sol=''
    for i in range(len(s)):
        if s[i] == s[i].upper():
            sol = sol + " " + s[i]
        else:
            sol = sol + s[i] 
    return sol
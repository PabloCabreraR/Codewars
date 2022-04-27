# INSTRUCTIONS

# This time no story, no theory. The examples below show you how to write function accum:
# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.


# SOLUTION

def accum(s):
    finalStr = ''
    letters = list(s)
    for i in range(len(letters)):
        secondaryStr = (letters[i].lower()*(i+1)).capitalize()
        finalStr = finalStr + secondaryStr + "-"
    return finalStr[:-1]
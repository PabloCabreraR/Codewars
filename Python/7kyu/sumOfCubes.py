# INSTRUCCTIONS

# Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
# Assume that the input n will always be a positive integer.
# Examples: (Input --> output)
# 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
# 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


# SOLUTION

def sum_cubes(n):
    answer = 0
    for i in range(n+1):
        answer += i**3
    return answer
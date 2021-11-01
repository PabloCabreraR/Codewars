## INSTRUCCIONTS

# Write a simple parser that will parse and run Deadfish.
# Deadfish has 4 commands, each 1 character long:
# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.
# parse("iiisdoso")  ==>  [8, 64]


## SOLUTION

def parse(data):
    counter = 0
    output = []
    for i in range(len(data)):
        if (data[i] == 'o'):
            output.append(counter)
        elif (data[i] == 'i'):
            counter += 1
        elif (data[i] == 's'):
            counter = counter * counter
        elif (data[i] == 'd'):
            counter -= 1
    return output
# INSTRUCCTIONS

# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
# Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
# []                                -->  "no one likes this"
# ["Peter"]                         -->  "Peter likes this"
# ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
# Note: For 4 or more names, the number in "and 2 others" simply increases.

# SOLUTION

def likes(names):
    count_names = len(names)
    like_this = ' like this'
    likes_this = ' likes this'
    who_like = ''
    if count_names == 0:
        who_like = 'no one'
    elif count_names == 1:
        who_like = names[0]
    elif count_names == 2:
        who_like = f'{names[0]} and {names[1]}'
    elif count_names == 3:
        who_like = f'{names[0]}, {names[1]} and {names[2]}'
    elif count_names > 3:
        who_like = f'{names[0]}, {names[1]} and {count_names - 2} others'
    if count_names < 2:
        return who_like + likes_this
    else:
        return who_like + like_this
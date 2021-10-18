# INSTRUCTIONS

# Acknowledgments:
# I thank yvonne-liu for the idea and for the example tests :)
# Description:
# Encrypt this!
# You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
# Your message is a string containing space separated words.
# You need to encrypt each word in the message using the following rules:
# The first letter must be converted to its ASCII code.
# The second letter must be switched with the last letter
# Keepin' it simple: There are no special characters in the input.
# Examples:
# encrypt_this("Hello") == "72olle"
# encrypt_this("good") == "103doo"
# encrypt_this("hello world") == "104olle 119drlo"


# SOLUTION

def encrypt_this(text):
    if len(text) == 0:
        return text
    else:
        text_array = text.split(' ')
        encrypted_array = []
        for word in text_array:
            asci_char = ord(word[0])
            last_char = word[-1]
            if (len(word) == 2):
                word = str(asci_char)+last_char
            elif (len(word) > 2):
                middle_char = word[1]
                rest = word[2:-1]
                word = str(asci_char)+last_char+rest+middle_char
            else: 
                word = str(asci_char)
            encrypted_array.append(word)
                 
        return " ".join(encrypted_array)
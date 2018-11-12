# Zachery Gentry
# 1001144385
# 10/22/18
# macOS - Mojave

# Open that file up & set to read
fileName = "input_EC.txt"
file = open(fileName, "r")

# Counter used to keep track of block openings
counter = 0
# Are the characters we're reading currently part of a comment block?
commented = False

for line in file:
    # Check if the line is commented out and do nothing
    if line.replace(" ", "").startswith("//"):
        doNothing = True
    # If this is the start of a comment block, set the commented state to true
    elif line.replace(" ", "").startswith("/*"):
        commented = True
    else:
        # For this line, is the character we're reading part of a "quote"?
        inQuote = False
        # Enumerate so that the index can be passed
        for index, c in enumerate(line):
            # Is this the end of a block comment? Sets commented state to false if so
            if line[index:index + 2] == "*/":
                commented = False
                continue
            # Check to see if it's a valid bracket opening and increments counter
            if c == "{" and not inQuote and not commented:
                counter += 1
                continue
            # Check to see if this is the start of a quote and set inQuote state to true
            if c == '"' and not commented:
                inQuote = not inQuote
                continue
            # Check to see if this is a valid bracket closing and decrements counter
            if c == "}" and not inQuote and not commented:
                counter -= 1
                continue
    # Print after each line is read with the counter preceding it
    print(str(counter) + " " + line)
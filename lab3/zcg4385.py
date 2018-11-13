# Zachery Gentry
# 1001144385
# 11/12/18
# macOS
# Operators accepted: %, ^, +, -, *, /


# This functions takes in an equation in RPN format and returns the final solution to it
def CalculateRPN(line):
    # Stack to keep track of numbers
    numbers = []
    # Iterate through each character/number delimited by whitespace
    for character in line.split():
        # If the character is an operator, pop two most recent numbers from the stack and calculate for that operator. Add that number to the stack
        if character == "+":
            number = numbers.pop() + numbers.pop()
            numbers.append(number)
        elif character == "-":
            firstNum = numbers.pop()
            secondNum = numbers.pop()
            number = secondNum - firstNum
            numbers.append(number)
        elif character == "*":
            number = numbers.pop() * numbers.pop()
            numbers.append(number)
        elif character == "/":
            firstNum = numbers.pop()
            secondNum = numbers.pop()
            number = secondNum / firstNum
            numbers.append(number)
        elif character == "%":
            firstNum = numbers.pop()
            secondNum = numbers.pop()
            number = secondNum % firstNum
            numbers.append(number)
        elif character == "^":
            firstNum = numbers.pop()
            secondNum = numbers.pop()
            number = pow(secondNum, firstNum)
            numbers.append(number)
        # If the character is just a number, add it to the stack
        elif character != "\n":
            numbers.append(int(character))
    return numbers.pop()  # The last item of the stack should be the final solution


# def ConvertToRPN(line):
#     numbers = []
#     operators = []

#     RPNLine = ""

#     for character in line.split():
#         if character == "(":
#             print("In parenth")


file = open("input_RPN.txt", "r")

for line in file:
    print(CalculateRPN(line))

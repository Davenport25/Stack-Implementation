// Stack Implementation

const readline = require('readline');

// Stack class implementation using an array
class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow!!! There are no  elements to pop.";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.items[this.items.length - 1];  // used to retrieve the top element of the stack without removing it
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Function to reverse a string using a stack
function reverseString(input) {    
    let stack = new Stack();
    for (let char of input) {  // using for loop to iterate through each character of a string (input) and adds it to a stack
        stack.push(char);
    }

    let reversed = "";
    while (!stack.isEmpty()) { // checks if the stack is empty
        reversed += stack.pop(); // The characters are popped one by one from the stack and appended to the reversed string.
    }

    return reversed;
}

// Function to check balanced parentheses using a stack
function isBalanced(expression) {
     Stack = new Stack();
     matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of expression) {  // Iterates through each character (char) in the expression string

        if ("({[".includes(char)) {  // Checks if the current char is one of these opening brackets: (, {, [
            Stack.push(char);
        } else if (")}]".includes(char)) {  // Checks if the current char is one of the closing brackets: ), }, ]

            if (Stack.isEmpty() || Stack.pop() !== matchingBrackets[char]) { // Checks if the stack is empty. If it’s empty when a closing bracket is encountered, it means there’s no opening bracket for this closing bracket|| If the stack is not empty, this element is compared to the expected matching opening bracket|| defines the relationship between opening and closing brackets
                return false;
            }
        }
    }

    return Stack.isEmpty();
}

// User menu
 rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function interactivePrompt() {
    console.log(`
Stack Menu:
1. Reverse a String
2. Check Balanced Parentheses
3. Exit
`);

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {  // The switch statement can then execute different actions based on the user's input or expression for different cases
            case "1":
                rl.question("Enter a string to reverse: ", (input) => {
                    result = reverseString(input);
                    console.log(`The reversed string is: ${result}`);
                    interactivePrompt();
                });
                break;
            case "2":
                rl.question("Enter an expression to check: ", (expression) => {
                   result = isBalanced(expression)
                        ? "The expression has balanced parentheses." // Using shorthand for if and else
                        : "The expression has unbalanced parentheses.";
                    console.log(result);
                    interactivePrompt();
                });
                break;
            case "3":
                console.log("Exiting. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                interactivePrompt();
                break;
        }
    });
}

// Start the process
interactivePrompt();

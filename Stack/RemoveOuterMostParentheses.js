const RemoveOuterMostParentheses = (s) => {
  const stack = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      if (stack.length > 0) {
        result += char;
      }
      stack.push(char);
    } else {
      stack.pop();
      if (stack.length > 0) {
        // why we are checking stck length is because we want to ensure that we are not adding the outermost parentheses to the result string. If the stack is empty after popping, it means we have just removed the outermost parentheses, and we should not add it to the result string.
        result += char;
      }
    }
  }
  return result;
};

//Dry run with example: s = "(()())(())"
// stack = []
// result = ""
// i = 0, char = '(', stack = ['('], result = ""
// i = 1, char = '(', stack = ['(', '('], result = "("
// i = 2, char = ')', stack = ['('], result = "()"
// i = 3, char = '(', stack = ['(', '('], result = "()("
// i = 4, char = ')', stack = ['('], result = "()()"
// i = 5, char = ')', stack = [], result = "()()"
// i = 6, char = '(', stack = ['('], result = "()()"
// i = 7, char = '(', stack = ['(', '('], result = "()()("
// i = 8, char = ')', stack = ['('], result = "()()()"
// i = 9, char = ')', stack = [], result = "()()()"
// Final result = "()()()"

// Time complexity: O(n), where n is the length of the string
// Space complexity: O(n), where n is the length of the string

// without stack
const RemoveOuterMostParenthesesWithoutStack = (s) => {
  let result = "";
  let openCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      if (openCount > 0) {
        result += char;
      }
      openCount++;
    } else {
      openCount--;
      if (openCount > 0) {
        result += char;
      }
    }
    return result;
  }
};
// Time complexity: O(n), where n is the length of the string
// Space complexity: O(n), where n is the length of the string // why space complexity is O(n) is because we are using a variable to keep track of the count of open parentheses, and we are building the result string in place. The result string can grow up to the length of the input string in the worst case (when all parentheses are valid and there are no outermost parentheses to remove). Therefore, the space complexity is O(n).
//But here space complexity should be O(1) because we are not using any extra space to store the result string, we are just using a variable to keep track of the count of open parentheses. The result string is being built in place and does not require additional space proportional to the input size. Therefore, the space complexity is O(1). // then why we are saying space complexity is O(n) is because we are building the result string in place, and the result string can grow up to the length of the input string in the worst case (when all parentheses are valid and there are no outermost parentheses to remove). Therefore, the space complexity is O(n). However, if we consider the space used for the result string as part of the output rather than auxiliary space, then we can say that the auxiliary space complexity is O(1) since we are only using a constant amount of extra space for the openCount variable.

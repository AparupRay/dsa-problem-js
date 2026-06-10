const ValidParentheses = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (map[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// Time complexity: O(n), where n is the length of the string
// Space complexity: O(n), where n is the length of the string

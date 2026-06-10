const MinStack = () => {
  const stack = [];
  const minStack = [];
  const push = (x) => {
    //Purpose of minStack is to keep track of the minimum value in the stack at any given time.
    // Whenever a new value is pushed onto the main stack,
    // we compare it with the current minimum value (the top of the minStack).
    // If the new value is smaller than or equal to the current minimum,
    // we also push it onto the minStack. This way, the minStack always has the minimum values in order,
    // and we can easily retrieve the minimum value in constant time.
    stack.push(x);
    if (minStack.length === 0 || x <= minStack[minStack.length - 1]) {
      minStack.push(x);
    }
  };
  const pop = () => {
    //purpose of the pop function is to remove the top element from the main stack and also check if it is the minimum value.
    // If the popped value is the same as the current minimum (the top of the minStack),
    // we also pop it from the minStack to ensure that the minStack remains accurate and reflects the new minimum value after the pop operation.
    //But why we are removing from minStack as well? Because if the popped value is the minimum value, we need to remove it from the minStack as well to ensure that the minStack remains accurate and reflects the new minimum value after the pop operation.
    // Why we are checking [minstack.length - 1] is because we want to compare the popped value with the current minimum value, which is always at the top of the minStack.
    const top = stack.pop();
    if (top === minStack[minStack.length - 1]) {
      minStack.pop();
    }
  };
  const top = () => {
    // The purpose of the top function is to return the top element of the main stack without modifying it.
    return stack[stack.length - 1];
  };
  const getMin = () => {
    // The purpose of the getMin function is to return the minimum value in the stack in constant time.
    return minStack[minStack.length - 1];
  };
  return {
    push,
    pop,
    top,
    getMin,
  };
};

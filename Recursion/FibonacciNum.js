//Iterative approach
//recursive approach

const fibonacciNum = (num) => {
  if (num <= 1) return num;

  return fibonacciNum(num - 1) + fibonacciNum(num - 2);
};

console.log("Fibonacci: ", fibonacciNum(5));

const factorialNum = (n) => {
  if (n == 1) return 1;

  return n * factorialNum(n - 1);
};

console.log("Factorial of num: ", factorialNum(5));

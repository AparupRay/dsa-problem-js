const powOfTwo = (n) => {
  if (n == 1) return true;

  if (n % 2 !== 0 && n < 1) return false;

  return powOfTwo(n / 2);
};

console.log(powOfTwo(17));

// const reverseNum = x.toString().split("").reverse().join("");
// return x == reverseNum;

const palindromeNum = (x) => {
  if (x < 0) return false;
  let xCopy = x;

  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }

  return xCopy == rev;
};

console.log(
  "Plaindrome: ",
  palindromeNum(12321),
  palindromeNum(-121),
  palindromeNum(323),
);

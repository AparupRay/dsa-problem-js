//Reverse Interger

const reverseInteger = (x) => {
  let xCopy = x;
  x = Math.abs(x); //First we changing the negative number into positive number

  let rev = 0;
  while (x > 0) {
    let rem = x % 10; //last number
    rev = rev * 10 + rem; // Adding number in reverse order
    x = Math.floor(x / 10); //After removing last digit from input number.
    // Also for removing decimal digit we are using Math.floor()
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return xCopy == rev ? -rev : rev;
};

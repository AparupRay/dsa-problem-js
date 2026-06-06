//Count Digit

const CounterDigit = (n) => {
  if (n == 0) return 1; //corner case. In case of 0 that is also a digit right.
  let count = 0;
  n = Math.abs(n); //to handle negative numbers. Now it will change the number to positive.
  while (n > 0) {
    // console.log(n / 10);
    n = Math.floor(n / 10); //Always it will take the floor value.
    console.log(n);
    count++;
  }
  console.log(count);
};

// CounterDigit(325);
// CounterDigit(0);
CounterDigit(-235);

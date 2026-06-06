//Sum of first n numbers
// const recursionSumCheck = (n) => {
//   if (n == 0) return 0;

//   return n + recursionSumCheck(n - 1);
// };

// console.log("Sum Check using recursion: ", recursionSumCheck(5));

//Sum of all elements in the array
// let arr = [5, 3, 2, 0, 1];
// const recursionSum = (n) => {
//   if (n == 0) {
//     return arr[n];
//   }
//   return arr[n] + recursionSum(n - 1);
// };

// console.log("Recursion Sum: ", recursionSum(arr.length - 1));

//Sum of all odd numbers in the array
let arr = [5, 2, 0, 3, 6, 7];
let n = 6;

const sumAllOddSum = (n) => {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumAllOddSum(n - 1);
};

console.log("Odd Sum :", sumAllOddSum(arr.length - 1));

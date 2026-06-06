const singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

console.log("SingleNum: ", singleNumber([4, 1, 2, 1, 2]));

//We are using XOR bitwise operator to find the single number in the array. The XOR operator has a property that if we XOR a number with itself, it will result in 0. So, if we XOR all the numbers in the array, the duplicate numbers will cancel each other out and we will be left with the single number.
//XOR operation examples:
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

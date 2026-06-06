const missingNumber = (arr) => {
  let partialSum = 0;

  let len = arr.length;

  let actualSum = (len * (len + 1)) / 2;

  for (let num of arr) {
    partialSum += num;
  }

  return actualSum - partialSum;
};

console.log("Missing number", missingNumber([9, 6, 4, 3, 5, 7, 0, 1, 8]));

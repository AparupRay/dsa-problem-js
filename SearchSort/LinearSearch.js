const LinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i + 1;
    }
  }
  return -1;
};

console.log(LinearSearch([12, 4, 5, 67, 21], 76));

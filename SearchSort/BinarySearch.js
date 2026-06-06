const BinarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  console.log("Left: ", left);
  console.log("Right: ", right);
  console.log(right > left);
  while (right >= left) {
    //For binary seacrh array always will be in sorted ascending order thats why right pointer always will be greater than left pointer
    let middle = Math.floor((left + right) / 2);
    console.log("Middle: ", middle);
    if (nums[middle] == target) {
      return middle;
    } else if (target < nums[middle]) {
      console.log("Right else if: ", middle - 1);
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log("BinarySearch result: ", BinarySearch([23, 45, 67, 123], 45));

//TimeComplexity will be O(log n)
//When ever we are dividing and array into two parts in every interation then it will be O(log n);
//Space Complexity will be O(1) here we have used three variables show based on that it should be O(3) but its a constant so we can present that as O(1);

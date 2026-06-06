const SelectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
};

console.log("Selection Sort", SelectionSort([12, 56, 32, 87, 2, 4, 14]));
//Time complexity is O (n square)
//Space complexity is O(1)

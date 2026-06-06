const InsertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let prev = i - 1;
    let curr = nums[i];

    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    console.log("Prev: ", prev);
    nums[prev + 1] = curr;
  }
  return nums;
};

console.log("Insertion Sort: ", InsertionSort([7, 4, 3, 5, 1, 2]));
console.log("Insertion Sort: ", InsertionSort([1, 3, 4, 5, 7, 2]));

//Time complexity - O(n square) - one is for loop and another is while loop which will iterate till nth position.
//Space Complexity - O(1)

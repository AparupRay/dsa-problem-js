//For unsorted array this is the solution
const BubbleSortUnsorted = (nums) => {
  // will always do all iterations even if the array is already sorted, wasting time.
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log("BubbleSortUnsorted: ", BubbleSortUnsorted([32, 12, 56, 2]));
//Time complexity of bubble sort is O(n2) means O (n square) - Worst case scenario- One for loop iterates under another for loop n times
//This is not good for sorting algorithm. Thats why Bubble sort mostly not used for production code.
//Space complexity will be O(1); - constants time variable we have used for this.

//For sorted array this is the solution - We dont want to check the sorted array for if condition mutiple times. If we use the same above code
//for sorted array as well then it will take much time to complete because it will check all the array elements after it becomes sorted.

const BubbleSortedArray = (nums) => {
  //This is the correct solution not the above one.
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    let isSwapped = false; //By default it will be false
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        console.log("j: ", nums[j]);
        console.log("j+1: ", nums[j + 1]);
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true; // It will be true once its swapped
      }
    }
    if (!isSwapped) break;
  }
  return nums;
};

console.log(
  "BubbleSortedArray: ",
  BubbleSortedArray([32, 45, 67, 21, 2, 89, 21, 67]),
);

// Makes it efficient for already-sorted arrays (early exit, O(n) best case)
// Still works correctly for unsorted arrays (O(n²) worst case)

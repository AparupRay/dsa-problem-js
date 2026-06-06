// ✅ 🔹 EASY ARRAY PROBLEMS (with LeetCode links)

// No.	Problem	LeetCode Link
// 1.	Two Sum	🔗 Two Sum
// 2.	Move Zeroes	🔗 Move Zeroes
// 3.	Contains Duplicate	🔗 Contains Duplicate
// 4.	Remove Duplicates from Sorted Array	🔗 Remove Duplicates from Sorted Array
// 5.	Max Consecutive Ones	🔗 Max Consecutive Ones
// 6.	Best Time to Buy and Sell Stock	🔗 Best Time to Buy and Sell Stock
// 7.	Intersection of Two Arrays	🔗 Intersection of Two Arrays
// 8.	Plus One	🔗 Plus One
// 9.	Check if Array is Sorted and Rotated	🔗 Check if Array is Sorted and Rotated
// 10.	Merge Sorted Arrays	🔗 Merge Sorted Array
// 11.	Squares of a Sorted Array	🔗 Squares of a Sorted Array
// 12.	Find Pivot Index	🔗 Find Pivot Index
// 13.	Backspace String Compare	🔗 Backspace String Compare
// 14.	Majority Element	🔗 Majority Element
// 15.	Valid Mountain Array	🔗 Valid Mountain Array
// 16.	Kth Missing Positive Number	🔗 Kth Missing Positive Number

// ✅ 🔸 MEDIUM ARRAY PROBLEMS (with LeetCode links)

// No.	Problem	LeetCode Link
// 1.	3Sum	🔗 3Sum
// 2.	Container With Most Water	🔗 Container With Most Water
// 3.	Product of Array Except Self	🔗 Product of Array Except Self
// 4.	Maximum Subarray (Kadane’s)	🔗 Maximum Subarray
// 5.	Set Matrix Zeroes	🔗 Set Matrix Zeroes
// 6.	Rotate Array	🔗 Rotate Array
// 7.	Spiral Matrix	🔗 Spiral Matrix
// 8.	Sort Colors	🔗 Sort Colors
// 9.	Find All Duplicates in Array	🔗 Find All Duplicates in an Array
// 10.	Subarray Sum Equals K	🔗 Subarray Sum Equals K
// 11.	Merge Intervals	🔗 Merge Intervals
// 12.	Insert Interval	🔗 Insert Interval
// 13.	Longest Consecutive Sequence	🔗 Longest Consecutive Sequence
// 14.	Jump Game	🔗 Jump Game
// 15.	Minimum Size Subarray Sum	🔗 Minimum Size Subarray Sum
// 16.	Find Minimum in Rotated Sorted Array	🔗 Find Minimum in Rotated Sorted Array
// 17.	Search in Rotated Sorted Array	🔗 Search in Rotated Sorted Array
// 18.	Maximum Product Subarray	🔗 Maximum Product Subarray
// 19.	Game of Life	🔗 Game of Life
// 20.	Next Greater Element	🔗 Next Greater Element II
// 21.	First Missing Positive	🔗 First Missing Positive
// 22.	Sliding Window Maximum	🔗 Sliding Window Maximum
// 23.	Longest Substring With At Most K Distinct Characters	🔗 Longest Substring with At Most K Distinct Characters
// 24.	Minimum Window Substring	🔗 Minimum Window Substring
// 25.	Wiggle Sort II	🔗 Wiggle Sort II
// 26.	Insert/Delete/GetRandom O(1)	🔗 Insert Delete GetRandom O(1)
// 27.	Range Sum Query (Prefix Sum)	🔗 Range Sum Query - Immutable
// 28.	Subarray Sum Divisible by K	🔗 Subarray Sums Divisible by K
// 29.	Max Points from Cards	🔗 Maximum Points You Can Obtain from Cards

//////////////////////////
//Easy problems

//🙋‍♂️ Two Sum
//Given an array, return indices of two numbers that add up to a target. Tests: Hashing, Time Optimization

const twoSumProblem = (nums, target) => {
  const pairs = []; // Blank array
  const numMap = new Map(); //Create hash map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; //Find complement
    // console.log("target nums[i] complement: ", target, nums[i], complement);

    if (numMap.has(complement)) {
      pairs.push([numMap.get(complement), i]); // Push the indices of two numbers
      //Another solution: pairs.push(numMap.get(complement), i);
      // console.log("Pairs: ", pairs);
    }

    numMap.set(nums[i], i); //Add the number and index of that number
    // console.log("NumMap: ", numMap);
  }

  return pairs; //Return an array if no solution found
};

console.log("Two Sum: ", twoSumProblem([2, 7, 8, 5, 4, 1], 9));
//⏰ Time Complexity - O(n)

//🙋‍♂️ Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
const moveZeros = (nums) => {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log("Move zeros case1: ", moveZeros([0, 1, 0, 3, 12]));
console.log("Move zeros case2: ", moveZeros([0]));
//⏰ Time Complexity - O(n)

//🙋‍♂️Contains Duplicate
// Check if any value appears more than once. Tests: Set usage, frequency tracking
const containsDuplicate = (nums) => {
  const newSet = new Set(); //Create an empty Set

  for (let num of nums) {
    //Loop through each element in nums
    if (newSet.has(num)) {
      return true; //Check if num already exists in the Set
    }
    newSet.add(num); // Add num to the Set if not already present
  }
  return false; //Return false if no duplicates found
};

console.log(
  "ContainsDuplicate: ",
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);

console.log("ContainsDuplicate: ", containsDuplicate([1, 3, 4, 5]));

//⏰ Time Complexity - O(n)

//🙋‍♂️Remove Duplicates from Sorted Array
// Return new length after removing duplicates in-place from a sorted array. Tests: Two-pointer pattern

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  return uniqueIndex + 1;
};

console.log(
  "Remove Duplicates: ",
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);

console.log("Remove Duplicates: ", removeDuplicates([]));

//🙋 Explaination
// Initially: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// i -> 0
// j -> 1

// Same (0 == 0), move j

// i -> 0
// j -> 2

// Different (0 != 1), move i to 1, nums[i] = nums[j]
// Now array: [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

// i -> 1
// j -> 3

// Same (1 == 1), move j
// Same (1 == 1), move j

// j -> 5

// Different (1 != 2), move i to 2, nums[i] = nums[j]
// Now array: [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]

//⏰ Time Complexity - O(n) - Single pass through array

//🙋‍♂️ Max consecutive ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const findMaxConsecutiveOnes = (nums) => {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      // maxCount = Math.max(maxCount, currentCount);
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      console.log(maxCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

console.log(
  "findMaxConsecutiveOnes: ",
  findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1])
);

//⏰ Time Complexity - O(n) - Single pass through array

//🙋‍♂️ Best Time to Buy and Sell Stock
// Buy once, sell once for max profit. Tests: Min tracking + Max profit

const maxProfit = (prices) => {
  let minPrice = Infinity;
  // It prevents incorrect profit calculations
  // - If minPrice started at 0, profit = prices[i] - minPrice would always be prices[i] at the start, leading to misleading calculations.
  // - By using Infinity, we properly find the actual lowest stock price before calculating profit

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    //Track the minimum price to buy
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    //Calculate profit if sold on this day
    let profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

console.log("maxProfit: ", maxProfit([7, 1, 5, 3, 6, 4]));

//🙋‍♂️Plus One
// Add 1 to a large number represented as digits. Tests: Carry logic simulation

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  // If all digits were 9, we need an extra digit at the start
  digits.unshift(1);
  return digits;
};

console.log("PlusOne: ", plusOne([4, 3, 2, 2]));

//⏰ Time Complexity - O(n) - Single pass through array

//🙋‍♂️ Check if Array Is Sorted and Rotated

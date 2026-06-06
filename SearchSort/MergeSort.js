//Merge Sort is a divide and conquer algorithm that sorts an array by recursively dividing it into smaller subarrays,
// sorting those subarrays, and then merging them back together in the correct order.
// The time complexity of Merge Sort is O(n log n) in all cases (best, average, and worst), making it an efficient sorting algorithm for large datasets.
// The space complexity is O(n) due to the temporary arrays used during the merging process.
//Divide and Conquer Algo we have used.
const MergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return Merge(left, right); // Divide method we have used here then sending left and right array recursive way.
};

const Merge = (left, right) => {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
};

// Divide method or MergeSort -> First function MergeSort we are dividing array in two parts - O(log n);
// Conquer method or Merge -> Second function Merge we are merging two sorted array in one array - O(n);
//Time Complexity will be O(n log n);
//Space Complexity will be O(1);

//Time Complexity of Bubble Sort, Insertion Sort and Selection Sort is O(n square). Merge Sort is far better than these sorting algo.

// const MergeSort = (nums1, nums2) => {
//   let p1 = nums1.length - 1;
//   let p2 = nums2.length - 1;

//   let m1 = nums1.length;
//   let m2 = nums2.length;

//   for (let i = m1 + m2 - 1; i >= 0; i--) {
//     if (p2 < 0) break;
//     console.log(
//       "p1:before if ",
//       p1,
//       "p2:before if  ",
//       p2,
//       "nums1[p1]:before if  ",
//       nums1[p1],
//       "nums2[p2]:before if  ",
//       nums2[p2],
//     );
//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       console.log(
//         "p1: ",
//         p1,
//         "p2: ",
//         p2,
//         "nums1[p1]: ",
//         nums1[p1],
//         "nums2[p2]: ",
//         nums2[p2],
//       );
//       nums1[i] = nums1[p1];
//       p1--;
//     } else {
//       nums1[i] = nums2[p2];
//       p2--;
//     }
//   }
//   return nums1;
// };

console.log("MergeSort: ", MergeSort([1, 3, 5, 7, 2, 4, 8, 9]));

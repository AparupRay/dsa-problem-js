const mergeSortedArray = (nums1, m, nums2, n) => {
  // DRY RUN: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
  let p1 = m - 1;
  // DRY RUN: p1 = 2 (points to last element of nums1's valid part)
  let p2 = n - 1;
  // DRY RUN: p2 = 2 (points to last element of nums2)

  for (let i = m + n - 1; i >= 0; i--) {
    // DRY RUN: i starts at 5, then 4, 3, 2, 1, 0 (filling from end backwards)
    if (p2 < 0) break;
    // DRY RUN: break when all nums2 elements are merged

    console.log("p1: ", p1);
    console.log("p2: ", p2);
    console.log(`Nums1[${p1}]: `, nums1[p1]);
    // DRY RUN: logs current pointers and values
    console.log(`Nums2[${p2}]: `, nums2[p2]);

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      // DRY RUN: compare nums1[2]=3 with nums2[2]=6 → 3 > 6? No
      nums1[i] = nums1[p1];
      console.log(`if nums1[${i}]:`, nums1[i]);
      console.log("if updated nums1:", nums1);
      p1--;
      // DRY RUN: places larger value and moves pointer
    } else {
      nums1[i] = nums2[p2];
      console.log(`else nums1[${i}]:`, nums1[i]);
      console.log("else updated nums1:", nums1);
      p2--;
      // DRY RUN: places nums2 element and moves its pointer
    }
  }
  return nums1;
  // DRY RUN: returns [1, 2, 2, 3, 5, 6]
};

console.log(
  "Merge Sorted Array Test1: ",
  mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
);

console.log("Merge Sorted Array Test2: ", mergeSortedArray([1], 1, [], 0));

console.log("Merge Sorted Array Test2: ", mergeSortedArray([0], 0, [1], 1));

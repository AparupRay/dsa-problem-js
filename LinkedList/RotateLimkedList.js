const rotateRight = function (head, k) {
  if (!head || k === 0) return head;
  // Step 1: Calculate the length of the linked list and find the tail node
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  // Step 2: Calculate the effective number of rotations needed
  k = k % length; // If k is greater than the length of the list, we only need to rotate k mod length times
  // Step 3: Storing slowPointer and fastPointer to head;
  let slowPointer = head;
  let fastPointer = head;
  for (let i = 1; i < k; i++) {
    // Move fastPointer K steps ahead
    fastPointer = fastPointer.next;
  }

  //Then we are starting slowPointer and fastPointer
  while (fastPointer.next) {
    //Move both pointer untill fastPointer reaches end of the list
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  // Step 4: After reaching fastPointer at the end of the list we are pointing to head of the linked list.
  fastPointer.next = head;

  // Step 5: The new head will be the node after the new tail
  let newHead = slowPointer.next;
  // Step 6: Break the circular linked list by setting the new tail's next to null
  slowPointer.next = null;
  // Step 7: Return the new head of the rotated linked list
  return newHead;
};

const isPalindrome = (head) => {
  // DRY RUN WITH [1,2,3,2,1]:
  // find the middle of the linked list
  // Step 1: Use slow/fast pointers to find middle
  // slow moves 1 step, fast moves 2 steps each iteration
  // Iteration 1: slow at 1, fast at 2
  // Iteration 2: slow at 2, fast at 2
  // Iteration 3: slow at 3, fast at 1 (after middle)
  // After loop: slow = 3 (middle)

  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of the linked list
  // Step 2: Reverse from node 3 onwards: 3->2->1 becomes 1->2->3
  // Before: 1->2->3->2->1
  // After:  1->2->3<-2<-1 (second half reversed)
  let prev = null;
  let current = slow;

  while (current) {
    // Iteration 1: current=3, temp=2, current.next=null (prev=null), prev=3, current=2
    // List: 3->null
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;

    // Iteration 2: current=2, temp=1, current.next=3 (prev), prev=2, current=1
    // List: 2->3
    // (Note: This is inside the loop, but for clarity, showing next iteration)
    // Actually, the loop runs again:
    // After first iteration: prev=3, current=2
    // Second iteration: temp=1, current.next=3, prev=2, current=1
    // Third iteration: temp=null, current.next=2, prev=1, current=null
  }

  // compare the first half and second half of the linked list
  // Step 3: Compare from both ends
  // firstHalf starts at 1, reversedHalf starts at 1 (reversed end)
  // Compare: 1==1 ✓, 2==2 ✓, 3==3 ✓
  // Result: palindrome = true
  let firstHalf = head;
  let reversedHalf = prev;

  while (reversedHalf) {
    if (firstHalf.val !== reversedHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    reversedHalf = reversedHalf.next;
  }

  return true;
};

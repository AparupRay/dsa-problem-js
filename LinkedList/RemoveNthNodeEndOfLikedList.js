const removeNthFromEnd = (head, n) => {
  // DRY RUN WITH [1,2,3,4,5], n=2:
  // Step 1: Create a dummy node and point it to head
  // dummy -> 1->2->3->4->5
  // Step 2: Initialize two pointers, fast and slow, to dummy
  // fast = dummy, slow = dummy
  // Step 3: Move fast pointer n steps ahead
  // Iteration 1: fast = 1 (1 step ahead of slow)
  // Iteration 2: fast = 2 (2 steps ahead of slow)
  // Step 4: Move both fast and slow pointers until fast reaches the end of the list
  // Iteration 1: fast = 3, slow = 1
  // Iteration 2: fast = 4, slow = 2
  // Iteration 3: fast = 5, slow = 3
  // Iteration 4: fast = null (end of list), slow = 4
  // Step 5: Skip the node after slow by setting slow.next to slow.next.next
  // List becomes: dummy->1->2->3->5
  // Step 6: Return dummy.next as the new head of the modified list

  // We can  use a sentinelNode (dummy node) to handle edge cases where the head of the list itself needs to be removed. By using a dummy node that points to the head, we can ensure that we always have a reference to the node before the one we want to remove, even if it's the head of the list. This simplifies the logic for removing nodes and avoids special cases for when the head needs to be removed.
  const dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next; // Move fast pointer n steps ahead of slow pointer. After this loop, fast will be n nodes ahead of slow.
  } // purpose of this step is to create a gap of n nodes between fast and slow pointers. This way, when fast reaches the end of the list, slow will be at the node just before the one we want to remove.
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;

  //Time complexity is O(n) - Where n is the number of nodes in the linked list. We are traversing the list at most twice (once to move the fast pointer n steps ahead and once to move both pointers until fast reaches the end).
  //Space complexity is O(1) - We are using only a few pointers (dummy, fast, and slow) to manipulate the list, regardless of the size of the input list. We are not using any additional data structures that grow with the input size, so the space used remains constant.
};

// This is the two pass solution where we first calculate the length of the list and then find the node to remove based on the length. The above implementation is a one pass solution that uses two pointers to achieve the same result without needing to calculate the length of the list first.
// var removeNthFromEnd = function(head, n) {
//     let sentinelNode = new ListNode();
//     sentinelNode.next = head;

//     let length = 0;
//     while(head) {
//         head = head.next;
//         length++;
//     }

//     let prevNodePos = length - n;

//     let prev = sentinelNode;

//     for(let i = 0; i < prevNodePos; i++) {
//         prev = prev.next;
//     }
//     prev.next = prev.next.next;

//     return sentinelNode.next;

// };

//Time complexity is O(n) - Where n is the number of nodes in the linked list. We are traversing the list twice (once to calculate the length and once to find the node to remove).
//Space complexity is O(1) - We are using only a few pointers (sentinelNode and prev) to manipulate the list, regardless of the size of the input list. We are not using any additional data structures that grow with the input size, so the space used remains constant.

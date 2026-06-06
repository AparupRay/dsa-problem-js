//Floyd's algorithm says you must have slow pointer and first pointer.
//If linkedlist cycle exists then slow and fast pointer will meet at the same point.

const hasCycle = (head) => {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast?.next) return false;
    // same but different approach if(!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

//Time Complexity: O(n), where n is the number of nodes in the list.
//Space Complexity: O(1), as we are using only two pointers.

//Space complexity here is O(1) because we are using only two pointers (slow and fast) to traverse the linked list, regardless of the size of the list. We are not using any additional data structures that grow with the input size, so the space used remains constant.

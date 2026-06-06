const addTwoNumbers = (l1, l2) => {
  //Dry run with 2 linked lists
  // l1: 2 -> 4 -> 3
  // l2: 5 -> 6 -> 4
  //Expected output: 7 -> 0 -> 8 (which represents the number 807, since the digits are stored in reverse order)
  // Step 1: Initialize carry to 0 and create a dummy head for the result linked list
  // carry = 0 //
  // dummyHead = ListNode(0) // This dummy head will help us easily return the result linked list later. We will build our result linked list starting from this dummy head, and at the end, we will return dummyHead.next as the head of the result linked list. This way, we can avoid edge cases when the result linked list is empty or has only one node.
  // current = dummyHead
  // Step 2: Loop through both linked lists until we reach the end of both and there is no carry
  // Iteration 1:
  // sum = carry + l1.val + l2.val = 0 + 2 + 5 = 7
  // carry = Math.floor(sum / 10) = Math.floor(7 / 10) = 0
  // current.next = ListNode(sum % 10) = ListNode(7 % 10) = ListNode(7)
  // current = current.next (current now points to the node with value 7)
  // Iteration 2:
  // sum = carry + l1.val + l2.val = 0 + 4 + 6 = 10
  // carry = Math.floor(sum / 10) = Math.floor(10 / 10) = 1
  // current.next = ListNode(sum % 10) = ListNode(10 % 10) = ListNode(0)
  // current = current.next (current now points to the node with value 0)
  // Iteration 3:
  // sum = carry + l1.val + l2.val = 1 + 3 + 4 = 8
  // carry = Math.floor(sum / 10) = Math.floor(8 / 10) = 0
  // current.next = ListNode(sum % 10) = ListNode(8 % 10) = ListNode(8)
  // current = current.next (current now points to the node with value 8)
  // Step 3: After the loop, check if there is any remaining carry and add it as a new node if necessary
  // In this case, carry is 0, so we do not add any new node.
  // Step 4: Return the next node of dummy head as the head of the result linked list
  // The result linked list is 7 -> 0 -> 8, which represents the number 807 (342 + 465 = 807).
  let carry = 0;
  let dummyHead = new ListNode(0); // why with 0? We use a dummy head with a value of 0 because it serves as a placeholder to simplify the logic of building the result linked list. The dummy head allows us to easily handle edge cases, such as when the result linked list is empty or has only one node. By starting with a dummy head, we can always add new nodes to the result linked list without worrying about whether it's the first node or not. At the end of the algorithm, we will return dummyHead.next as the head of the result linked list, which will give us the correct result without including the dummy head itself.
  let current = dummyHead;
  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummyHead.next;
};

//Time complexity: O(max(m, n)) where m and n are the lengths of the two linked lists. We traverse both linked lists once, so the time complexity is linear with respect to the length of the longer linked list.
//Space complexity: O(max(m, n)) for the result linked list. In the worst case, if both linked lists have the same length and there is a carry at the end, the result linked list will have one more node than the longer linked list. Therefore, the space complexity is linear with respect to the length of the longer linked list.
//O(max(m, n)) // what does this mean? It means that the time complexity of the algorithm is linear with respect to the length of the longer linked list. If one linked list has a length of m and the other has a length of n, the algorithm will take O(max(m, n)) time to complete, because we need to traverse both linked lists until we reach the end of both.

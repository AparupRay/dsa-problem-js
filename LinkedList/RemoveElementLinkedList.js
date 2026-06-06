const removeElements = (head, val) => {
  // DRY RUN WITH [1,2,6,3,4,5,6], val=6:
  // Step 1: Create a dummy node and point it to head
  // dummy -> 1->2->6->3->4->5->6
  // Step 2: Initialize current pointer to dummy
  // current = dummy
  // Step 3: Traverse the list
  // Iteration 1: current= dummy, current.next=1 (not 6), move current to 1
  // Iteration 2: current=1, current.next=2 (not 6), move current to 2
  // Iteration 3: current=2, current.next=6 (is 6), skip it by setting current.next to 3
  // List becomes: dummy->1->2->3->4->5->6
  // Iteration 4: current=2, current.next=3 (not 6), move current to 3
  // Iteration 5: current=3, current.next=4 (not 6), move current to 4
  // Iteration 6: current=4, current.next=5 (not 6), move current to 5
  // Iteration 7: current=5, current.next=6 (is 6), skip it by setting current.next to null
  // List becomes: dummy->1->2->3->4->5
  // Step 4: Return dummy.next as the new head of the modified list

  //DRY RUN WITH [7,7,7,7], val=7: //This is the corner case where first node it self is the value to be removed.
  // Step 1: Create a dummy node and point it to head
  // dummy -> 7->7->7->7
  // Step 2: Initialize current pointer to dummy
  // current = dummy
  // Step 3: Traverse the list
  // Iteration 1: current= dummy, current.next=7 (is 7), skip it by setting current.next to 7 (next node)
  // List becomes: dummy->7->7->7
  // Iteration 2: current= dummy, current.next=7 (is 7), skip it by setting current.next to 7 (next node)
  // List becomes: dummy->7->7
  // Iteration 3: current= dummy, current.next=7 (is 7), skip it by setting current.next to 7 (next node)
  // List becomes: dummy->7
  // Iteration 4: current= dummy, current.next=7 (is 7), skip it by setting current.next to null
  // List becomes: dummy->null
  // Step 4: Return dummy.next as the new head of the modified list (which is null in this case)
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

//Time complexity is O(n) - Where n is the number of nodes in the linked list. We are traversing the entire list once.
//Space complexity is O(1) - We are using only a few pointers (dummy and current) to manipulate the list, regardless of the size of the input list. We are not using any additional data structures that grow with the input size, so the space used remains constant.

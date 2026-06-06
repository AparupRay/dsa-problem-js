const middleOfLinkedlist = (head) => {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

//slowPointer will increase one step
//fastPointer will increase two steps
//Automatically when we fastPointer will reach at the end means null then we will stop and return the slowPointer that will middle of the linkedlist.
//Time Complexity is O(n) - We are traversing the linked list once to find the middle node.
//Space Complexity is O(1) - We are using only a constant amount of space to store the slow and fast pointers, regardless of the size of the linked list.

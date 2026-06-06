// Intersection points of two linked lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:

//This is using Hash Table/ Hash Map / Set

const getIntersectionNode = (headA, headB) => {
  let store = new Set();

  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
};

//Time Complexity is O(n + m) - Where n and m are the number of nodes in linked list A and B respectively. We are traversing both linked lists once.
//Space Complexity is O(m) - Where m is the number of nodes in linked list B. We are storing all nodes of linked list B in the set, so it will take O(m) space.

//If we use the brute force approach then time complexity will be O(n * m) because for each node in linked list A we will be traversing the entire linked list B to check if there is a match. So it will be O(n * m). But using hash table we can reduce it to O(n + m).

//Checking linkedlist cycle using hash table
const linkedListCycle = (head) => {
  const newSet = new Set();
  let curr = head;
  while (curr) {
    if (newSet.has(curr)) {
      return true;
    }
    newSet.add(curr);
    curr = curr.next;
  }
  return false;
};

//Time complexity is O(n) - Where n is the number of nodes.We are traversing till end.
//Space complexity is O(n) - Because we are storing all nodes under newSet so all n nodes. So it will be O(n).

//leet code problem - 141

//Space complexity can be reduced to O(1) using Floyd’s Tortoise and Hare algorithm (also known as the fast and slow pointer technique). In this approach, we use two pointers, one slow pointer that moves one step at a time and one fast pointer that moves two steps at a time. If there is a cycle in the linked list, the fast pointer will eventually meet the slow pointer. If there is no cycle, the fast pointer will reach the end of the list. This way we can determine if there is a cycle without using extra space for a hash set.

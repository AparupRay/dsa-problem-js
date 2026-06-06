const swapPairs = (head) => {
  if (!head || !head.next) return head; // Base case: if the list is empty or has only one node, return the head as is
  let firstNode = head; // The first node of the pair to be swapped
  let secondNode = head.next; // The second node of the pair to be swapped
  // Swap the first and second nodes
  firstNode.next = swapPairs(secondNode.next); // Recursively swap the rest of the list starting from the node after the second node
  secondNode.next = firstNode; // Point the second node to the first node to complete the swap
  return secondNode; // Return the new head of the swapped pair
};
// Time complexity: O(n) where n is the number of nodes in the linked list. We visit each node once to perform the swap.
// Space complexity: O(n) due to the recursive call stack. In the worst case, if the linked list has n nodes, the recursion will go n/2 levels deep (since we are swapping pairs), resulting in O(n) space complexity.

//Dry run for this Input: head = [1,2,3,4]
// Step 1: firstNode = 1, secondNode = 2
// Step 2: firstNode.next = swapPairs(3) // Recursively swap the rest of the list starting from node 3
// Step 3: In the recursive call swapPairs(3), firstNode = 3, secondNode = 4
// Step 4: firstNode.next = swapPairs(null) // Recursively
// swap the rest of the list starting from node after 4 (which is null)
// Step 5: In the recursive call swapPairs(null), return null (base case)
// Step 6: secondNode.next = firstNode (4.next = 3) // Point the second node (4) to the first node (3) to complete the swap
// Step 7: Return secondNode (4) as the new head of the swapped pair (3, 4)
// Step 8: Back in the first call swapPairs(1), firstNode.next = 4 (the result of the recursive call) // Point the first node (1) to the new head of the swapped pair (4)
// Step 9: secondNode.next = firstNode (2.next = 1) // Point the second node (2) to the first node (1) to complete the swap
// Step 10: Return secondNode (2) as the new head of the swapped pair (1, 2)
// Final output: [2, 1, 4, 3]

//So we are first swapping 3 and 4 then 1 and 2 ?
// Yes, that's correct! The algorithm works recursively by first swapping the last pair of nodes (3 and 4) and then using the result of that swap to swap the first pair of nodes (1 and 2). This way, we ensure that all pairs of nodes in the linked list are swapped correctly.
// The recursive approach allows us to handle the swapping of pairs in a clean and efficient manner, without needing to manage multiple pointers or complex logic to keep track of the nodes being swapped. Each recursive call takes care of swapping one pair of nodes, and the base case ensures that we stop when we reach the end of the list or when there is only one node left to swap.
// The final output for the input [1, 2, 3, 4] will be [2, 1, 4, 3], which is the result of swapping the pairs (1, 2) and (3, 4).
// The algorithm can be visualized as follows:
// Initial list: 1 -> 2 -> 3 -> 4
// After first swap (3 and 4): 1 -> 2 -> 4 -> 3
// After second swap (1 and 2): 2 -> 1 -> 4 -> 3
// Final output: 2 -> 1 -> 4 -> 3
// The algorithm effectively swaps pairs of nodes in a recursive manner, ensuring that all pairs are swapped correctly while maintaining the structure of the linked list.

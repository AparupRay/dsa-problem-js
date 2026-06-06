const mergeTwoSortedLists = (l1, l2) => {
  // Base cases: If one of the lists is empty, return the other list
  //Dry Run:
  // l1: 1 -> 2 -> 4
  // l2: 1 -> 3 -> 4
  // Step 1: Compare the first nodes of both lists (1 and 1). Since they are equal, we can choose either one. Let's choose l1's node. Now we need to merge the rest of l1 (2 -> 4) with l2 (1 -> 3 -> 4).
  // Step 2: Compare the first nodes of the remaining lists (2 and 1). Since 1 is smaller, we choose l2's node. Now we need to merge l1 (2 -> 4) with the rest of l2 (3 -> 4).
  // Step 3: Compare the first nodes of the remaining lists (4 and 4). Since they are equal, we can choose either one. Let's choose l1's node. Now we need to merge the rest of l1 (4) with the rest of l2 (4).
  // Step 4: Compare the first nodes of the remaining lists (4 and 4). Since they are equal, we can choose either one. Let's choose l1's node. Now we need to merge the rest of l1 (null) with the rest of l2 (null).
  // Step 5: Since both lists are now empty, we return null. The merged list is 1 -> 1 -> 2 -> 3 -> 4 -> 4.
  // If both lists are non-empty, we compare the values of the current nodes. We choose the smaller value and recursively merge the rest of the lists. This way, we build the merged list in sorted order.
  // The base cases handle the scenario when one of the lists is empty. If l1 is empty, we return l2, and if l2 is empty, we return l1. This ensures that we don't lose any nodes from the non-empty list.
  // The recursive calls will continue until we reach the end of both lists, at which point we will have a fully merged sorted list.
  //Return the head of the merged list, which will be the smaller of the first nodes of l1 and l2. The rest of the merged list will be built through the recursive calls.
  // We merge the rest of l1 (l1.next) with l2, and set it as the next node of l1. This way, we build the merged list starting with l1's node.
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoSortedLists(l1.next, l2);
        //Dry run of this step: If l1's current node value is smaller than l2's current node value, we set l1's next to the result of merging the rest of l1 (l1.next) with l2. This way, we are building the merged list starting with l1's node. We then return l1 as the head of the merged list.
        return l1;
    } else {
        l2.next = mergeTwoSortedLists(l1, l2.next);
        //Dry run of this step: If l2's current node value is smaller than or equal to l1's current node value, we set l2's next to the result of merging l1 with the rest of l2 (l2.next). This way, we are building the merged list starting with l2's node. We then return l2 as the head of the merged list.
        return l2;
    }
};
//Time Complexity is O(n + m) - Where n and m are the number of nodes in linked list l1 and l2 respectively. We are traversing both linked lists once.
//Space Complexity is O(n + m) - Where n and m are the number of nodes in linked list l1 and l2 respectively. In the worst case, we will be creating a new linked list that contains all nodes from both linked lists, so it will take O(n + m) space.

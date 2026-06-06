const reverseLinkedlist = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev; // Its not mandatory to assign prev to head. head is just a pointer here. So directly we can return prev. basically same thing. return prev instead of last two lines;
  return head;
};

// When Prev it will reach at the end that time we nned to assign our prev value to head.So it will be rversed completely.
//Ex: [1,2,3,4,5] --> linkedlist
// Here prev = null and curr = head means 1.
// temp = curr.next means next element of 1 is 2 so temp will be 2.
//curr.next = prev means 1 will point to prev means null.
//prev = curr means now prev and curr both pointing to element 1;
//curr = temp means 2 is the new curr element and 1 is still prev element as per last iteration. temp value already we have stored as curr.next basically 2 at first.
//Like this way iteration will go on untill or unless it reaches null. at the end curr and temp both will be null and 5 will be prev element.
//So now we need to assign our last element 5 as head.

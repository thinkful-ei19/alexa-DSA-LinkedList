'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // if list is empty, then insert new item as only item in the list
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      // start at head
      let tempNode = this.head;
      // loop will run to end of list
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    // start at the head
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        // otherwise keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode;
  }

  // Get head node
  // Begin looping through the list, checking the next node's value as you go
  // Once you find that the next node's value is the one you're looking for, creating a new node.
  // Insert the new node by setting its Next value to be equal to the current node's Next value, then set the current node's next value to be the new node.
  // Return from the function.
  insertBefore(newItem, beforeNode) {
    if (!this.head) {
      this.insertFirst(newItem);
    }
    if (this.head.value === beforeNode) {
      this.insertFirst(newItem);
    }

    // start at head (or null)
    // currNode will go and prevNode will follow
    let currNode = this.head;
    let prevNode = this.head;

    // loop as long as we are not at end of list && we are not at the node we want to insert before
    while ((currNode.next !== null) && (currNode.value !== beforeNode) ) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    // once we find the beforeNode
    // create new node
    prevNode.next = new _Node(newItem, currNode);
  }

  insertAfter(newItem, afterNode) {
    if (!this.head) {
      this.insertFirst(newItem);
    }
    if (!this.head.next) {
      this.insertLast(newItem);
    }

    // start at head
    let currNode = this.head;
    let nextNode = this.head;

    // loop as long as we are not at the node we want to insert after
    while (currNode.value !== afterNode) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }

    currNode.next = new _Node(newItem, nextNode);
  }


  insertAt(newItem, position) {
    if (!this.head === null) {
      this.insertFirst(newItem);
    } else {
      let currNode = this.head;
      let prevNode = this.head;
      let counter = 0;

      while(counter !== position) {
        prevNode = currNode;
        currNode = currNode.next;
        counter++;
      }
      let n = new _Node(newItem);
      prevNode.next = n;
      n.next = currNode;

    }
  }

}

function display(list) {
//   if (!list.head) {
//     console.log('The list is empty');
//   }

  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let num = 0;
  if (list.head) {
    num = 1;
  } else {
    console.log('The list is empty');
    return;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
    num++;
  }
  console.log('The size of the linked list is ', num);
  return num;
}

function isEmpty(list) {
  if(!list.head) {
    console.log('This list is empty');
    return;
  } else {
    console.log('Not an empty list');
    return;
  }
}


function findPrevious(list, item) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;
  let prevNode = list.head;

  while (currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  console.log('This is the previous node:', prevNode.value);
  return prevNode.value;
}

function findLast(list) {
  if(!list.head) {
    return;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log('This is the last value in the list:', currNode.value);
  return currNode.value;
}

// Polynomial O(n^2) - doubly nested loops
// setting newNode to last node?

// function WhatDoesThisProgramDo(lst){
//   let current = lst.head;
//   while(current !== null){
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         newNode.next = newNode.next.next;
//       }
//       else{
//         newNode = newNode.next;
//       }
//     }
//     current = current.next;
//   }
// }

// try to use one null variable at beginning instead of two
function reverseList(list) {
  if(!list.head) {
    return;
  }

  let currNode = list.head;
  let prevNode = null;
  let nextNode = null;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  list.head = prevNode;
  return list; 
}

function thirdFromEnd(list) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;

  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }

  let thirdItem = currNode.value;
  console.log('this is the third item from the end:', thirdItem);
  return thirdFromEnd;
}

function middleOfList(list) {
  if (!list.head) {
    return;
  }

  let fastPtr = list.head;
  let slowPtr = list.head;

  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }

  console.log('this is the middle of the list', slowPtr.value);
  return slowPtr.value;
}

// ****Traverse the whole linked list and count the no. of nodes. 
// Now traverse the list again till count/2 and return the node at count/2.
function middleOfList2(list) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;
  let counter = 0;

  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }

  let half = counter / 2;

  while (currNode !== half && currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log('this is the middle of list using method 2:', currNode.value);
  return currNode.value;
}



const SLL = new LinkedList();
const myLL = new LinkedList();

function main() {

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');  
  SLL.insertLast('Google');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  
  //   SLL.insertBefore('Alexa', 'Helo');

  SLL.insertAfter('Alexa', 'Husker');
  //   console.log(SLL.find('Alexa'));

  SLL.insertAt('Dog', 2);
  SLL.insertAt('Cat', 3);
  //   SLL.remove('squirrel'); // => 'Item not found'

  SLL.remove('Tauhida');

  console.log(JSON.stringify(SLL, null, 2));
  // console.log(SLL.find('Helo'));
  //   return SLL;
}

main();
// display(SLL);
// display(myLL);
// isEmpty(SLL);
// isEmpty(myLL);
// findPrevious(SLL, 'Dog');
// findPrevious(SLL, 'Starbuck');
// findLast(SLL);
// // WhatDoesThisProgramDo(SLL);
display(SLL);
size(SLL);
thirdFromEnd(SLL);
middleOfList(SLL);
middleOfList2(SLL);
// console.log(JSON.stringify(reverseList(SLL), null, 2));






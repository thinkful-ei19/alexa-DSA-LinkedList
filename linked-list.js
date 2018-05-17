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
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
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
      return;
    }
    if (this.head.value === beforeNode) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== beforeNode) ) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = new _Node(newItem, currNode);
  }

  insertAfter(newItem, afterNode) {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.insertLast(newItem);
    }

    let currNode = this.head;
    let nextNode = this.head;

    while (currNode.value !== afterNode) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }

    currNode.next = new _Node(newItem, nextNode);
  }


  insertAt(newItem, number) {
    if (!this.head === null) {
      this.insertFirst(newItem);
    } else {
      let currNode = this.head;
      let prevNode = this.head;
      let counter = 0;

      while(counter !== number) {
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
  if (list.head) {
    console.log(list.head.value);
  }
  if (!list.head) {
    console.log('The list is empty');
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    console.log(currNode.next.value);
    currNode = currNode.next;
  }

}

const SLL = new LinkedList();
// const myLL = new LinkedList();

function main() {

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  
  //   SLL.insertBefore('Alexa', 'Helo');

  SLL.insertAfter('Alexa', 'Husker');
  //   console.log(SLL.find('Alexa'));

  SLL.insertAt('Dog', 2);

  //   SLL.remove('squirrel'); // => 'Item not found'

  SLL.remove('Tauhida');
  
  console.log(JSON.stringify(SLL, null, 2));
  //   console.log(SLL.find('Helo'));
//   return SLL;
}
// console.log(main());
main();
display(SLL);
// display(myLL);
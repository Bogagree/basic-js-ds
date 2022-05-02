const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  constructor() {
        this.stack = [];
  } 

  push(element) {
      this.stack.push(element)
  }

  pop() {
  const arr = this.stack;
  const requestedElement = arr[arr.length-1]
  this.stack.pop()
  return requestedElement
}

peek() {
  const arr = this.stack;
  const element = arr[arr.length -1]
  return element
}
}

//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {

//   constructor() {
//     this.head = null;
//     this.value = 0;
//   }

//   push(element) {
//    const nodeEl = new Node(element)
//    if (this.head) {
//      this.head = nodeEl;
//      nodeEl.next = this.head;
//    } else { this.head = nodeEl}
//   }

//   pop() {
//     const currentEl = new Node(element);
    
//     this.head = this.head.next;
//     this.value = this.head.value;
    
//     return currentEl.value
//   }

//   peek() {
//     const nodeEl = this.head.value
// //     return nodeEl
// }
// }
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here

  

module.exports = {
  Stack
};

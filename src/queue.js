const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

//  class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

const { ListNode } = require('../extensions/list-node.js');

class Queue {

  constructor() {
    this.queue = new ListNode()
   }

  getUnderlyingList() {
    return this.queue 
  }

  enqueue(value) {
   let newElInQue = new ListNode(value);

   if (!this.queue.value){
    this.queue.value = value;
    return this.queue
   }

   let tail = this.queue;
   while (tail.next) {
    tail = tail.next;
   }
   tail.next = newElInQue;
    return this.queue
  }

  dequeue() {
    let delEl = this.queue.value;
    this.queue = this.queue.next
    return delEl
    
  }
}

module.exports = {
  Queue
};

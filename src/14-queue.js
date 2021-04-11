const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = null;
    this.sizeQueue = 0;
    this.pointer = null;
  }

  get size() {
    return this.sizeQueue;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.size) {
      this.pointer.next = node;
    } else {
      this.queue = node;
    }
    this.pointer = node;
    this.sizeQueue += 1;
  }

  dequeue() {
    let value = null;
    if (this.size) {
      value = this.queue.value;
      this.queue = this.queue.next;
      this.sizeQueue -= 1;
    }
    return value;
  }
}

module.exports = Queue;

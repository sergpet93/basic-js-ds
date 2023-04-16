const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

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


class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor(head = null) {
    this.head = head;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.head === null){
      this.head = new ListNode(value);
    }
    else{
      let temp = this.head;
      while(temp.next !== null)
          temp = temp.next;
      temp.next = new ListNode(value);
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.head.value;
    this.head = this.head.next;
    return result
  }
}

module.exports = {
  Queue
};

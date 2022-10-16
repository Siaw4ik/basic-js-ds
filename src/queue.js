const { NotImplementedError, ListNode } = require('../extensions/index.js');


class Queue {
  constructor(){
    this.head = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value)
    } else {
      let cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = new ListNode(value)
    }

  }

  dequeue() {
   const result = this.head;
   const cur = this.head.next;
   this.head = cur;
   return result.value

  }
}

module.exports = {
  Queue
};

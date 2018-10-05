// queue is a linear data structure that follows FIFO (first in, first out)
// imagine the checkout line at a grocery store
// push, pop, peek, isEmpty



// basic approach
/************************************************************/

const queue = [];

queue.push(7);
queue.push(10);
queue.push(13);

queue.shift(); // 7



// oop approach
/************************************************************/

class Queue {
  constructor() {
    this.queue = [];
  }

  push = data => {
    this.queue.push(data);
  }

  pop = () => {
    // remove the first element from the queue
    // aka remove the oldest node in the queue
    // aka remove the least recent node from the queue
    return this.queue.shift();
  }

  peek = () => {
    // return the top of the queue
    // top == next item to be removed
    return this.queue[0];
  }

  is_empty = () => {
    return !this.queue[0] ? true : false;
  }
}
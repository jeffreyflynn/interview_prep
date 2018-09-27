/* STACK --- Last In, First Out --- Stack of dinner plates *//*

    pop -- remove the top item from the stack
    push -- add an item to the top of the stack
    peek -- return the top of the stack
    is_empty -- return true if the stack is empty
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  pop = () => this.stack.pop();

  push = data => this.stack.push(data);

  peek = () => this.is_empty() ? null : this.stack[this.stack.length - 1];

  is_empty = () => this.stack.length === 0 ? true : false;
}


/* QUEUE --- First In, First Out --- Checkout at grocery store *//*

    add -- add an item to the end of the list
    remove -- remove the first item in the list
    peek -- return the top of the queue
    is_empty -- return true if the queue is empty
*/

class Queue {
  constructor() {
    this.queue = [];
  }

  add = data => this.queue.push(data);

  remove = () => this.queue.shift();

  peek = () => this.is_empty() ? null : this.queue[0];

  is_empty = () => this.queue.length === 0 ? true : false;
}
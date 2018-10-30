// Stack is a linear data structure that follows LIFO (Last In, First Out)
// Basic methods include: push, pop, peek, and isEmpty

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack[0] !== undefined;
  }
}
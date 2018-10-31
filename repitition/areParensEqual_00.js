// Given a string of parentheses/brackets, return true if every opening paren matches its closing partner.

/* Sudo Code *//*
    * scan the string/array left to right
        * if the element is an opening bracket, push it to the stack
        * if the element is a closing bracket, see if it matches the last element in the stack
            * if it does, pop that element off the stack and move on to the next element
    * if the stack is empty, return true!
*/

class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }

  push(val) {
    if (!this.isEmpty()) {
      this.stack.push(val);
      this.count++;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      this.count--;
      return this.stack.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.count];
    }
  }

  isEmpty() {
    return this.stack[0] !== undefined;
  }
}

function areParensEqual(str) {
  for (let i = 0; i < str.length; i++) {
    
  }
}
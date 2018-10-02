// implement a stack using two queues
// https://stackoverflow.com/questions/688276/implement-stack-using-two-queues


class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue = data => this.queue.push(data);

  dequeue = () => this.queue.shift();

  peek = () => this.queue[0];

  is_empty = () => !this.queue[0] ? true : false;
}


// efficient pop
class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this.size = 0;
  }

  push = data => {
    this.queue2.enqueue(data);
    while (!this.queue1.is_empty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop = () => {
    return this.queue1.dequeue();
  }
}


// efficient push
class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this.size = 0;
  }

  push = data => {
    this.queue1.enqueue(data);
  }

  pop = () => {
    while (this.queue1.length > 1) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
    const result = this.queue1.dequeue(); // queue1 is now empty
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    return result;
  }
}
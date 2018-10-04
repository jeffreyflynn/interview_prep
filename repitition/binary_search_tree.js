class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push_iterative(value) {
    const newnode = new Node(value);

    if (!this.root) {
      this.root = newnode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value && current.left) {
        current = current.left;
      }
      else if (value < current.value && !current.left) {
        current.left = newnode;
        break;
      }
      else if (value > current.value && current.right) {
        current = current.right;
      }
      else if (value >current.value && !current.right) {
        current.right = newnode;
        break;
      }
    }
  }

  push_recursive(value) {
    const newnode = new Node(value);

    if (!this.root) {
      this.root = newnode;
      return;
    }
    
    const recurse = current_node => {
      if (value < current_node.value) {
        if (current_node.left) return recurse(current_node.left);
        else current_node.left = newnode;
      }
      if (value > current_node.value) {
        if (current_node.right) return recurse(current_node.right);
        else current_node.right = newnode;
      }
      return newnode;
    }

    return recurse(this.root);
  }
}
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

  insert_iterative(value) {
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

  insert_recursive(value) {
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

  // visits the left branch, then the current node, then the right branch
  traverse_inOrder(node=this.root) {
    if (node) {
      this.traverse_inOrder(node.left);
      console.log(node.value);
      this.traverse_inOrder(node.right);
    }
  }

  // visit the current node before its child nodes have been visited 
  traverse_preOrder(node=this.root) {
    if (node) {
      console.log(node.value);
      this.traverse_preOrder(node.left);
      this.traverse_preOrder(node.right);
    }
  }

  // visit the current node after its child nodes have been visited
  traverse_postOrder(node=this.root) {
    if (node) {
      this.traverse_postOrder(node.left);
      this.traverse_postOrder(node.right);
      console.log(node.value);
    }
  }
}
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let currentnode = this.root;
      while (true) {
        if (value < currentnode.value) {
          if (!currentnode.left) {
            currentnode.left = newNode;
            return this;
          }
          currentnode = currentnode.left;
        } else {
          if (!currentnode.right) {
            currentnode.right = newNode;
            return this;
          }
          currentnode = currentnode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(30);
tree.insert(170);
console.log(tree.lookup(30));

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = null;
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
            returnthis;
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
}

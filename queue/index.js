class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    // O(1)
    return this.first;
  }
  enqueue(value) {
    // O(1)
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // O(1)
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

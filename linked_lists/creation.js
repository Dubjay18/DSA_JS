let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const preNode = {
      value,
      next: this.head,
    };
    this.head = preNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (!(index && value)) {
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index >= this.length) {
      return console.log("index out of range");
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      console.log(this.printList());
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const preNode = {
      value,
      next: this.head,
      prev: null,
    };
    this.head.prev = preNode;
    this.head = preNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (!(index && value)) {
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
}
const myLinkedList2 = new LinkedList(10);
const Dlinked = new DoublyLinkedList(10);
myLinkedList2.append(5);
Dlinked.append(5);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
myLinkedList2.prepend(7);
myLinkedList2.printList();
console.log(Dlinked.append(5));
console.log(myLinkedList2.remove(5));

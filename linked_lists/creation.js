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
}
const myLinkedList2 = new LinkedList(10);
myLinkedList2.append(5);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
myLinkedList2.prepend(7);

console.log(myLinkedList2);

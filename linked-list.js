class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.length = 0;
    this.head = null;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val, null);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val, null);

    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return this.head;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length++;
    return this.head;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let time1, time2

let testNode = new LinkedList
console.log("Linked List Test One");
for ( let i = 0; i < 10000; i++) {
  time1 = new Date()
  for ( let j = 0; j < 10; j++) {    
    testNode.addToHead(i)
    console.log("Adding " + `${j}`)
  }
  time2 = new Date()
  console.log("Time Taken: " + (time2 - time1) + " ms" );
}


let testNode2 = new DoublyLinkedList;
console.log("Doubly Linked List Test One");

for (let i = 0; i < 100000; i+=10) {
    time1 = new Date();
    for (let j = 0; j < 1000; j+= 100) {
        testNode2.addToHead(i, j)
        console.log("Adding " + `${j}`)
    }
    time2 = new Date();
    console.log("Time Taken: " + (time2 - time1) + " ms" ); 
}


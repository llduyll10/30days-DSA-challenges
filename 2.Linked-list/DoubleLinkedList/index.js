class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let head = null;

function addNode(newData) {
  var newNode = new Node(newData);
  if (head == null) {
    head = newNode;
    return;
  }
  var current = head;
  while (current.next != null) {
    current = current.next;
  }
  current.next = newNode;
  newNode.prev = current;
}


function printListForward() {
  var current = head;
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}

function printListBackward() {
  var current = head;
  while (current.next != null) {
    current = current.next;
  }
  while (current != null) {
    console.log(current.data);
    current = current.prev;
  }
}

addNode(0)
addNode(1)
addNode(2)
addNode(3)

// printListForward()
printListBackward()
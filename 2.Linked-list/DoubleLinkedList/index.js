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

function push(newData) {
  // 1. allocate node
  // 2. put in the data
  var newNode = new Node(newData);
  // 3. Make next of new node as head and previous as NULL
  newNode.next = head;
  newNode.prev = null;
  if (head != null) {
    // 4. change prev of head node to new node
    head.prev = newNode;
  }
  // 5. move the head to point to the new node
  head = newNode;
}

function insertAfter(prevNode, newData) {
  var newNode = new Node(newData);
  newNode.next = prevNode.next
  prevNode.next = newNode
  newNode.prev = prevNode

  if (newNode.next != null) {
    newNode.next.prev = newNode
  }
}

function append(newData) {
  var newNode = new Node(newData)
  if(head == null){
    newNode.prev = null
    head = newNode
    return
  }
  var last = head
  while(last.next != null){
    last = last.next
  }
  last.next = newNode
  newNode.prev = last
  return
}

function search(data, head) {
  var current = head
  var position = 0
  while(current != null){
    if(current.data == data){
      return position
    }
    current = current.next
    position++
  }
  return -1
}

function deleteNode(node) {
  if(node == null){
    return
  }
  if(node.prev == null){
    head = node.next
    return
  }
  if(node.next == null){
    node.prev.next = null
    return
  }
  node.prev.next = node.next
  node.next.prev = node.prev
  return
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

addNode(0);
addNode(1);
addNode(2);
addNode(3);
push(5)
insertAfter(head, 6)
append(10)
deleteNode(head)


printListForward()
// printListBackward();

console.log('Search: ',search(0,head))

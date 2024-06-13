var head;

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

// Inserting At the Beginning of the list
// To insert a node at the start/beginning/front of a Linked List, we need to:
// Make the first node of Linked List linked to the new node
// Remove the head from the original first node of Linked List
// Make the new node as the Head of the Linked List.
function push(new_data){
    var new_node = new Node(new_data)
    new_node.next = head
    head = new_node
}


// To insert a node after a given node in a Linked List, we need to:

// Check if the given node exists or not.
// If it do not exists,
// terminate the process.
// If the given node exists,
// Make the element to be inserted as a new node
// Change the next pointer of given node to the new node
// Now shift the original next pointer of given node to the next pointer of new node
function insertAfter(prev_node, new_data){
    if(prev_node == null){
        return
    }
    var new_node = new Node(new_data)
    new_node.next = prev_node.next
    prev_node.next = new_node
}


// To insert a node at the end of a Linked List, we need to:

// Go to the last node of the Linked List
// Change the next pointer of last node from NULL to the new node
// Make the next pointer of new node as NULL to show the end of Linked List

function append(new_data){
    var new_node = new Node(new_data)
    if(head == null){
        head = new_node
        return
    }
    var last = head
    while(last.next != null){
        last = last.next
    }
    last.next = new_node
    new_node.next = null
    return
}

//  Delete from Beginning:
function deleteAtBeginning(){
    if(head == null){
        return
    }
    head = head.next
    return
}

// Delete from End:
function deleteAtEnd(){
    if(head == null){
        return
    }
    if(head.next == null){
        head = null
        return
    }
    var current = head
    while(current.next.next != null){
        current = current.next
    }
    current.next = null
    return
}

// For printing the linked list
var head = null;
function printList(){
    var current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}

// To delete a node from the linked list, we need to do the following steps:

// Find the previous node of the node to be deleted.
// Change the next of the previous node.
// Free memory for the node to be deleted.
function deleteNode(node){
    if(node == null){
        return
    }
    if(node.next == null){
        node = null
        return
    }
    node.data = node.next.data
    node.next = node.next.next
    return
}

// Search an element in a Linked List
function search(data,list){
    var current = list
    while(current != null){
        if(current.data == data){
            return true
        }
        current = current.next
    }
    return false

}

// Find Length of a Linked List
function length(list){
    var current = list
    var count = 0
    while(current != null){
        count++
        current = current.next
    }
    return count
}

// Reverse a Linked List
function reverse(list){
    var current = list
    var prev = null
    var next = null
    while(current != null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    list = prev
    return list
}

// Delete a Linked List node at a given position
function deleteNodeAtIndex(index, list){
    var current = list
    var prev = null
    var count = 0
    if (index === 0) {
        list = list.next;
        return
    }
    while(current != null){
        if(count == index){
            prev.next = current.next
            return
        }
        prev = current
        current = current.next
        count++
    }

}

// Demo for insert after
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

head = node1
node1.next = node2
node2.next = node3

append(5)
push(0)
insertAfter(node2, 4)
deleteAtBeginning()
deleteAtEnd()
deleteNode(node1)
console.log('search',search(10, head))
console.log('length',length(head))
head=reverse(head)

printList()

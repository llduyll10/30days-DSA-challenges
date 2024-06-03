// Implement Queue by Using Linked List

// Node Class
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Queue Class
class Queue {
    constructor() {
        this.front = null
        this.rear = null
    }

    enqueue(data) {
        var newNode = new Node(data)
        if (this.front == null) {
            this.front = newNode
            this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue() {
        if (this.front == null) {
            return
        }
        var data = this.front.data
        this.front = this.front.next
        return data
    }

    front() {
        if (this.front == null) {
            return
        }
        return this.front.data
    }

    rear() {
        if (!this.rear) {
            return;
        }
        return this.rear.data;
    }

    isEmpty() {
        return this.front === null;
    }


    print() {
        var current = this.front
        while(current != null) {
            console.log(current.data)
            current = current.next
        }
    }
}

// Driver Code
var q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

let data = q.dequeue()
console.log('dequeue', data)

let rearData = q.rear
console.log('rear', rearData)

let frontData = q.front
console.log('front', frontData)

console.log(q.print())
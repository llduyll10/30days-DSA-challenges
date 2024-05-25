// Implement by Using Linked List
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        var newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        if(this.top == null) {
            return
        }
        var data = this.top.data
        this.top = this.top.next
        return data
    }

    peek() {
        if(this.top == null) {
            return
        }
        return this.top.data
    }

    isEmpty() {
        if(this.top == null) {
            return true
        }
        return false
    }

    print() {
        var current = this.top
        while(current != null) {
            console.log(current.data)
            current = current.next
        }
    }

    length() {
        var current = this.top
        var count = 0
        while(current != null) {
            count++
            current = current.next
        }
        return count
    }

    clear() {
        this.top = null
    }
}

// Driver Code
var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
stack.pop()

console.log(stack.length())
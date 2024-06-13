var t = -1
var MAX = 1000
var a = Array(MAX).fill(0)


function isEmpty() {
    if (t == -1) {
        return true
    }
    return false
}

function isFull() {
    if (t == MAX - 1) {
        return true
    }
    return false
}

function push(data) {
    if (isFull()) {
        console.log('Stack overflow')
        return
    }
    t = t + 1
    a[t] = data
}

function pop(){
    if (isEmpty()) {
        console.log('Stack underflow')
        return
    }
    var data = a[t]
    t = t - 1
    return data
}

function peek() {
    if (isEmpty()) {
        console.log('Stack underflow')
        return
    }
    return a[t]
}

function print(){
    if (isEmpty()) {
        console.log('Stack underflow')
        return
    }
    for (var i = 0; i <= t; i++) {
        console.log(a[i])
    }
}

push(10);
push(20);
push(30);
push(40);

pop()
// peek()
print()
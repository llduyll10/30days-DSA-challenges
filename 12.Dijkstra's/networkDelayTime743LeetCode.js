class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let smallest = index;
        if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    enqueue(element, priority) {
        const node = new Node(element, priority);
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(u, v, weight) {
        if (!this.adjacencyList[u]) {
            this.adjacencyList[u] = [];
        }
        this.adjacencyList[u].push({ node: v, weight: weight });
    }

    dijkstra(start, n) {
        let distances = {};
        let previous = {};
        let pq = new PriorityQueue();

        for (let i = 1; i <= n; i++) {
            if (i === start) {
                distances[i] = 0;
                pq.enqueue(i, 0);
            } else {
                distances[i] = Infinity;
                pq.enqueue(i, Infinity);
            }
            previous[i] = null;
        }

        while (!pq.isEmpty()) {
            let smallest = pq.dequeue().element;

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor of this.adjacencyList[smallest] || []) {
                    let newDistance = distances[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;
                    if (newDistance < distances[nextNeighbor]) {
                        distances[nextNeighbor] = newDistance;
                        pq.enqueue(nextNeighbor, newDistance);
                        previous[nextNeighbor] = smallest;
                    }
                }
            }
        }

        return distances;
    }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Graph();

    for (let [u, v, w] of times) {
        console.log('u',u)
        // console.log('v',v)
        // console.log('w',w)
        graph.addEdge(u, v, w);
    }

    const distances = graph.dijkstra(k, n);
    let maxTime = 0;

    for (let node = 1; node <= n; node++) {
        if (distances[node] === Infinity) return -1;
        maxTime = Math.max(maxTime, distances[node]);
    }

    return maxTime === Infinity ? -1 : maxTime;
};

// DRIVE CODE
times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
n = 4;
k = 2;

console.log(networkDelayTime(times, n, k)); // Output: -1

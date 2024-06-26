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
    while (
      index > 0 &&
      this.heap[index].priority < this.heap[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
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
    if (!this.adjacencyList[u]) this.adjacencyList[u] = [];
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    this.adjacencyList[u].push({ node: v, weight: weight });
  }

  findMinPath(start, end) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    // Khởi tạo distances, previous và đưa các đỉnh vào hàng đợi ưu tiên.
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0; // Khoảng cách từ đỉnh bắt đầu đến chính nó là 0.
        pq.enqueue(vertex, 0); // Đưa đỉnh bắt đầu vào hàng đợi với ưu tiên là 0.
      } else {
        distances[vertex] = Infinity; // Khoảng cách từ đỉnh bắt đầu đến các đỉnh khác ban đầu là vô cùng.
        pq.enqueue(vertex, Infinity); // Đưa các đỉnh khác vào hàng đợi với ưu tiên là vô cùng.
      }
      previous[vertex] = null; // Khởi tạo đỉnh tiền nhiệm của mỗi đỉnh là null.
    }

    while (!pq.isEmpty()) {
      let smallestElement = pq.dequeue().element; // Lấy đỉnh có khoảng cách nhỏ nhất từ hàng đợi.

      if (smallestElement == end) {
        // Nếu đỉnh nhỏ nhất là đỉnh kết thúc
        const path = [];
        while (previous[smallestElement]) {
          // Truy vết từ đỉnh kết thúc về đỉnh bắt đầu
          path.push(smallestElement); // Đưa đỉnh vào đường đi ngắn nhất
          smallestElement = previous[smallestElement]; // Di chuyển đến đỉnh tiền nhiệm
        }
        path.push(start); // Đưa đỉnh bắt đầu vào đường đi ngắn nhất
        return path.reverse(); // Trả về đường đi từ đỉnh bắt đầu đến đỉnh kết thúc (đảo ngược vì đã truy vết từ cuối lên đầu)
      }

      if (smallestElement || distances[smallestElement] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallestElement]) {
          let candidate = distances[smallestElement] + neighbor.weight; // Tính toán khoảng cách từ đỉnh bắt đầu đến đỉnh kề
          let nextNeighbor = neighbor.node; // Lấy đỉnh kề

          if (candidate < distances[nextNeighbor]) {
            // Nếu khoảng cách mới nhỏ hơn khoảng cách hiện tại
            distances[nextNeighbor] = candidate; // Cập nhật khoảng cách mới
            previous[nextNeighbor] = smallestElement; // Đỉnh tiền nhiệm của đỉnh kề là đỉnh hiện tại
            pq.enqueue(nextNeighbor, candidate); // Đưa đỉnh kề vào hàng đợi với khoảng cách mới
          }
        }
      }

    }

    return []; // Trả về mảng rỗng nếu không có đường đi từ đỉnh bắt đầu đến đỉnh kết thúc
  }

  dijkstra(start) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (!pq.isEmpty()) {
      let smallest = pq.dequeue().element;

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let candidate = distances[smallest] + neighbor.weight; // Tính khoảng cách mới từ đỉnh hiện tại đến đỉnh kề.
          let nextNeighbor = neighbor.node;
          if (candidate < distances[nextNeighbor]) { // So sánh khoảng cách mới với khoảng cách hiện tại đến đỉnh kề.
            distances[nextNeighbor] = candidate; // Nếu khoảng cách mới nhỏ hơn, cập nhật khoảng cách và đỉnh trước đó.
            previous[nextNeighbor] = smallest;
            pq.enqueue(nextNeighbor, candidate); // Thêm đỉnh kề vào hàng đợi ưu tiên với khoảng cách mới.
          }
        }
      }
    }

    return {distances, previous}
  }

  printPath(start, end, previous){
    const path = [];
    let current = end;
    while (current !== null) {
      path.push(current);
      current = previous[current];
    }

    return path.reverse();
  }
}

// Tạo đồ thị và thêm các cạnh
const graph = new Graph();
graph.addEdge(0, 1, 1);
graph.addEdge(1, 2, 5);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 5, 7);
graph.addEdge(2, 5, 1);
graph.addEdge(3, 0, 2);
graph.addEdge(3, 2, 1);
graph.addEdge(3, 4, 4);
graph.addEdge(4, 3, 3);
graph.addEdge(5, 4, 1);

// Chạy thuật toán Dijkstra từ đỉnh 0 đến đỉnh 4
// const path = graph.findMinPath(0, 4);
// console.log(path); // Kết quả mong đợi: [0, 1, 3, 2, 5, 4]

const result = graph.dijkstra(0);
console.log(result.distances)
console.log(result.previous)
path = graph.printPath( 0, 4, result.previous);
console.log('path', path);



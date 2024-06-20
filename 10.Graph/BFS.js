class Graph {
  constructor() {
    this.neighbors = {}; // Khởi tạo danh sách kề rỗng
  }

  // Hàm để thêm cạnh vào đồ thị
  addEdge(u, v) {
    if (!this.neighbors[u]) this.neighbors[u] = []; // Nếu đỉnh u chưa có trong danh sách kề, khởi tạo mảng rỗng
    this.neighbors[u].push(v); // Thêm đỉnh v vào danh sách kề của u

    if (!this.neighbors[v]) this.neighbors[v] = []; // Nếu đỉnh v chưa có trong danh sách kề, khởi tạo mảng rỗng
    this.neighbors[v].push(u); // Thêm đỉnh u vào danh sách kề của v (đồ thị vô hướng)
  }

  // Hàm để thực hiện duyệt BFS trên đồ thị
  bfs(startNode) {
    let queue = [startNode]; // Tạo hàng đợi và thêm đỉnh bắt đầu vào hàng đợi
    let visited = {}; // Khởi tạo đối tượng để lưu các đỉnh đã thăm
    visited[startNode] = true; // Đánh dấu đỉnh bắt đầu đã được thăm

    while (queue.length > 0) {
      // Lặp lại cho đến khi hàng đợi trống
      let currentNode = queue.shift(); // Lấy đỉnh đầu tiên ra khỏi hàng đợi
      console.log(currentNode); // In đỉnh hiện tại
      for (const neighbor of this.neighbors[currentNode] || []) {
        // Duyệt qua các đỉnh kề của đỉnh hiện tại
        if (!visited[neighbor]) {
          // Nếu đỉnh kề chưa được thăm
          queue.push(neighbor); // Thêm đỉnh kề vào hàng đợi
          visited[neighbor] = true; // Đánh dấu đỉnh kề đã được thăm
        }
      }
    }
  }

  // Hàm để tìm đường đi ngắn nhất từ start tới end sử dụng BFS
  minPath(start, end) {
    let queue = [start]; // Tạo hàng đợi và thêm đỉnh bắt đầu vào hàng đợi
    let visited = {}; // Khởi tạo đối tượng để lưu các đỉnh đã thăm
    let path = {}; // Khởi tạo đối tượng để lưu vết đường đi

    visited[start] = true; // Đánh dấu đỉnh bắt đầu đã được thăm
    path[start] = -1; // Đỉnh bắt đầu không có đỉnh trước đó

    while (queue.length > 0) {
      // Lặp lại cho đến khi hàng đợi trống
      let current = queue.shift(); // Lấy đỉnh đầu tiên ra khỏi hàng đợi

      // Nếu đỉnh hiện tại là đỉnh đích, truy vết lại đường đi
      if (current === end) {
        // path { '0': null, '1': 0, '2': 1, '3': 0, '4': 3, '5': 1 }
        // step 1: tmp = end = 5
        // step 2: tmp = 5 => path[5] = 1
        // step 3: tmp= 1=> path[1] = null > stop
        const shortestPath = [];
        let tmp = end;
        while (tmp !== -1) {
          shortestPath.push(tmp);
          tmp = path[tmp];
        }
        return shortestPath.reverse(); // Trả về đường đi ngắn nhất
      }

      // Duyệt qua các đỉnh kề của đỉnh hiện tại
      for (const neighbor of this.neighbors[current] || []) {
        if (!visited[neighbor]) {
          // Nếu đỉnh kề chưa được thăm
          visited[neighbor] = true; // Đánh dấu đỉnh kề đã được thăm
          queue.push(neighbor); // Thêm đỉnh kề vào hàng đợi
          path[neighbor] = current; // Lưu vết đường đi
        }
      }
    }

    return null; // Nếu không tìm thấy đường đi, trả về null
  }
}

// Tạo đồ thị mới
const graph = new Graph();

// Thêm các cạnh vào đồ thị
graph.addEdge(0, 1); // Thêm cạnh giữa 0 và 1
graph.addEdge(0, 3); // Thêm cạnh giữa 0 và 3
graph.addEdge(1, 2); // Thêm cạnh giữa 1 và 2
graph.addEdge(1, 3); // Thêm cạnh giữa 1 và 3
graph.addEdge(1, 5); // Thêm cạnh giữa 1 và 5
graph.addEdge(2, 5); // Thêm cạnh giữa 2 và 5
graph.addEdge(3, 4); // Thêm cạnh giữa 3 và 4

console.log('neighbors', graph.neighbors);
console.log('BFS from vertex 0:');
graph.bfs(0);

console.log('Shortest path from vertex 0 to vertex 5:');
const path = graph.minPath(0, 5);
if (path) {
  console.log(`Path: ${path.join(' -> ')}`);
} else {
  console.log('No path found');
}

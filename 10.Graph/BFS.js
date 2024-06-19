// Lớp để đại diện cho đồ thị sử dụng danh sách kề
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

  // Hàm để tìm đường đi ngắn nhất từ startNode tới endNode sử dụng BFS
  shortestPathBFS(startNode, endNode) {
    const queue = [startNode]; // Tạo hàng đợi và thêm đỉnh bắt đầu vào hàng đợi
    const visited = new Array(Object.keys(this.neighbors).length).fill(false); // Khởi tạo mảng để lưu các đỉnh đã thăm
    const path = {}; // Khởi tạo đối tượng để lưu vết đường đi

    visited[startNode] = true; // Đánh dấu đỉnh bắt đầu đã được thăm
    path[startNode] = null; // Đỉnh bắt đầu không có đỉnh trước đó

    while (queue.length > 0) {
      // Lặp lại cho đến khi hàng đợi trống
      const currentNode = queue.shift(); // Lấy đỉnh đầu tiên ra khỏi hàng đợi

      // Nếu đỉnh hiện tại là đỉnh đích, truy vết lại đường đi
      if (currentNode === endNode) {
        console.log('path', path);
        const shortestPath = [];
        let crawl = endNode;
        while (crawl !== null) {
          shortestPath.push(crawl);
          crawl = path[crawl];
        }
        return shortestPath.reverse(); // Trả về đường đi ngắn nhất
      }

      // Duyệt qua các đỉnh kề của đỉnh hiện tại
      for (const neighbor of this.neighbors[currentNode] || []) {
        if (!visited[neighbor]) {
          // Nếu đỉnh kề chưa được thăm
          visited[neighbor] = true; // Đánh dấu đỉnh kề đã được thăm
          queue.push(neighbor); // Thêm đỉnh kề vào hàng đợi
          path[neighbor] = currentNode; // Lưu vết đường đi
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
graph.addEdge(3, 5); // Thêm cạnh giữa 3 và 5

console.log('neighbors', graph.neighbors);

// Tìm đường đi ngắn nhất từ đỉnh 1 tới đỉnh 4
console.log('Shortest path from vertex 1 to vertex 4:');
const path = graph.shortestPathBFS(0, 5);
if (path) {
  console.log(`Path: ${path.join(' -> ')}`);
} else {
  console.log('No path found');
}

class Graph {
  constructor() {
    this.neighbors = {}; // Khởi tạo danh sách kề rỗng
  }

  // Hàm để thêm cạnh vào đồ thị
  addEdge(u, v) {
    if (!this.neighbors[u]) {
      this.neighbors[u] = []; // Nếu đỉnh u chưa có trong danh sách kề, khởi tạo mảng rỗng
    }
    this.neighbors[u].push(v); // Thêm đỉnh v vào danh sách kề của u

    if (!this.neighbors[v]) {
      this.neighbors[v] = []; // Nếu đỉnh v chưa có trong danh sách kề, khởi tạo mảng rỗng
    }
    this.neighbors[v].push(u); // Thêm đỉnh u vào danh sách kề của v
  }

  // Hàm để thực hiện duyệt DFS trên đồ thị sử dụng stack
  dfs(startNode) {
    const stack = [startNode]; // Tạo ngăn xếp và thêm đỉnh bắt đầu vào ngăn xếp
    const visited = {}; // Khởi tạo đối tượng để lưu các đỉnh đã thăm

    while (stack.length > 0) {
      // Lặp lại cho đến khi ngăn xếp trống
      const currentNode = stack.pop(); // Lấy đỉnh đầu tiên ra khỏi ngăn xếp

      if (!visited[currentNode]) {
        visited[currentNode] = true; // Đánh dấu đỉnh hiện tại đã được thăm
        console.log(currentNode); // In đỉnh hiện tại

        // Thêm các đỉnh kề chưa được thăm vào ngăn xếp
        for (const neighbor of this.neighbors[currentNode] || []) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  // Hàm để tìm đường đi từ startNode đến endNode sử dụng DFS
  findPath(startNode, endNode) {
    const stack = [startNode]; // Tạo ngăn xếp và thêm đỉnh bắt đầu vào ngăn xếp
    const visited = {}; // Khởi tạo đối tượng để lưu các đỉnh đã thăm
    const path = {}; // Khởi tạo đối tượng để lưu vết đường đi

    visited[startNode] = true; // Đánh dấu đỉnh bắt đầu đã được thăm
    path[startNode] = null; // Đỉnh bắt đầu không có đỉnh trước đó

    while (stack.length > 0) {
      const currentNode = stack.pop(); // Lấy đỉnh đầu tiên ra khỏi ngăn xếp

      if (currentNode === endNode) {
        // Truy vết lại đường đi từ endNode về startNode
        const fullPath = [];
        let tmp = endNode;
        while (tmp !== null) {
          fullPath.push(tmp);
          tmp = path[tmp];
        }
        console.log('Visited:', visited); // Log các đỉnh đã được thăm
        return fullPath.reverse(); // Trả về đường đi ngắn nhất
      }

      for (const neighbor of this.neighbors[currentNode] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true; // Đánh dấu đỉnh kề đã được thăm
          stack.push(neighbor); // Thêm đỉnh kề vào ngăn xếp
          path[neighbor] = currentNode; // Lưu vết đường đi
        }
      }
    }

    console.log('Visited:', visited); // Log các đỉnh đã được thăm nếu không tìm thấy đường đi
    return null; // Nếu không tìm thấy đường đi, trả về null
  }
}

// Tạo đồ thị mới
const graph = new Graph();

// Thêm các cạnh vào đồ thị
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(3, 5);

console.log('Neighbors:', graph.neighbors);

// Tìm đường đi từ đỉnh 0 đến đỉnh 5
const path = graph.findPath(0, 5);
if (path) {
  console.log(`Path from 0 to 5: ${path.join(' -> ')}`);
} else {
  console.log('No path found');
}

// Lớp để đại diện cho đồ thị sử dụng danh sách kề
class Graph {
    constructor() {
        this.neighbors = {}; // Khởi tạo danh sách kề rỗng
    }

    // Hàm để thêm cạnh vào đồ thị
    addEdge(u, v) {
        if (!this.neighbors[u]) this.neighbors[u] = []; // Nếu đỉnh u chưa có trong danh sách kề, khởi tạo mảng rỗng
        this.neighbors[u].push(v); // Thêm đỉnh v vào danh sách kề của u
    }

    // Hàm để thực hiện duyệt BFS trên đồ thị
    bfs(startNode) {
        const queue = [startNode]; // Tạo hàng đợi và thêm đỉnh bắt đầu vào hàng đợi
        const visited = {}; // Khởi tạo đối tượng để lưu các đỉnh đã thăm

        visited[startNode] = true; // Đánh dấu đỉnh bắt đầu đã được thăm

        while (queue.length > 0) { // Lặp lại cho đến khi hàng đợi trống
            const currentNode = queue.shift(); // Lấy đỉnh đầu tiên ra khỏi hàng đợi
            console.log(currentNode); // In đỉnh hiện tại

            // Duyệt qua các đỉnh kề của đỉnh hiện tại
            for (const neighbor of this.neighbors[currentNode] || []) {
                if (!visited[neighbor]) { // Nếu đỉnh kề chưa được thăm
                    visited[neighbor] = true; // Đánh dấu đỉnh kề đã được thăm
                    queue.push(neighbor); // Thêm đỉnh kề vào hàng đợi
                }
            }
        }
    }
}

// Tạo đồ thị mới
const graph = new Graph();

// Thêm các cạnh vào đồ thị
graph.addEdge(0, 1); // Thêm cạnh giữa 0 và 1
graph.addEdge(0, 2); // Thêm cạnh giữa 0 và 2
graph.addEdge(1, 3); // Thêm cạnh giữa 1 và 3
graph.addEdge(1, 4); // Thêm cạnh giữa 1 và 4
graph.addEdge(2, 4); // Thêm cạnh giữa 2 và 4


console.log('neighbors', graph.neighbors);

// Thực hiện duyệt BFS bắt đầu từ đỉnh 0
console.log("Breadth First Traversal starting from vertex 0:");
graph.bfs(0);

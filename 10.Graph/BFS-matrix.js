// Tạo object neighbors từ ma trận kề
const matrix = [
  [0, 1, 0, 1, 0, 0], // Đỉnh 0
  [1, 0, 1, 1, 0, 1], // Đỉnh 1
  [0, 1, 0, 0, 0, 1], // Đỉnh 2
  [1, 1, 0, 0, 1, 0], // Đỉnh 3
  [0, 0, 0, 1, 0, 0], // Đỉnh 4
  [0, 1, 1, 0, 0, 0], // Đỉnh 5
];

function getNeighbors(matrix) {
  const neighbors = {};
  for (let i = 0; i < matrix.length; i++) {
    neighbors[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        neighbors[i].push(j);
      }
    }
  }
  return neighbors;
}

const neighbors = getNeighbors(matrix);
console.log('Neighbors:', neighbors);

function bfs(neighbors, startNode) {
  const queue = [startNode]; // Tạo hàng đợi và thêm đỉnh bắt đầu vào hàng đợi
  const visited = {}; // Khởi tạo object để lưu các đỉnh đã thăm
  visited[startNode] = true; // Đánh dấu đỉnh bắt đầu đã được thăm
  const result = []; // Lưu kết quả duyệt BFS

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Lấy đỉnh đầu tiên ra khỏi hàng đợi
    result.push(currentNode); // Thêm đỉnh hiện tại vào kết quả duyệt
    console.log(currentNode); // In đỉnh hiện tại

    for (const neighbor of neighbors[currentNode]) {
      if (!visited[neighbor]) {
        // Nếu có cạnh từ currentNode đến neighbor và neighbor chưa được thăm
        queue.push(neighbor); // Thêm neighbor vào hàng đợi
        visited[neighbor] = true; // Đánh dấu neighbor đã được thăm
      }
    }
  }

  return result;
}

// Thực hiện duyệt BFS bắt đầu từ đỉnh 0
console.log('Breadth First Traversal starting from vertex 0:');
const bfsResult = bfs(neighbors, 0);
console.log(`BFS result: ${bfsResult.join(' -> ')}`);

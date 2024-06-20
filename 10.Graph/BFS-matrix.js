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

function minPath(start, end) {
  let queue = [start];
  let visited = {};
  visited[start] = true;

  let path = {};
  path[start] = null;

  while (queue.length > 0) {
    let currentNode = queue.shift();

    visited[currentNode] = true;

    let neighbors = getNeighbors(matrix);

    if (currentNode === end) {
      let tmp = end;
      let pathResult = [];
      // path { '0': null, '1': 0, '2': 1, '3': 0, '4': 3, '5': 1 }
      // step 1: tmp = end = 5
      // step 2: tmp = 5 => path[5] = 1
      // step 3: tmp= 1=> path[1] = null > stop
      while (tmp !== null) {
        pathResult.push(tmp);
        tmp = path[tmp];
      }
      return pathResult.reverse();
    }

    for (let neighbor of neighbors[currentNode] || []) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
        path[neighbor] = currentNode;
      }
    }
  }

  return null;
}

// Driver code
let res = minPath(0, 5);
console.log(res);

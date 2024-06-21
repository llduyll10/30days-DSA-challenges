class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  // Kiểm tra xem tọa độ có nằm trong phạm vi của lưới không
  isInBounds(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.cols;
  }

  // Thực hiện DFS để thăm toàn bộ đảo bắt đầu từ (x, y)
  dfs(x, y, visited) {
    const stack = [[x, y]];
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]; // Các hướng đi: phải, xuống, trái, lên

    while (stack.length > 0) {
      const [cx, cy] = stack.pop();

      if (!visited[cx][cy]) {
        visited[cx][cy] = true;

        for (const [dx, dy] of directions) {
          const newX = cx + dx;
          const newY = cy + dy;

          if (
            this.isInBounds(newX, newY) &&
            this.grid[newX][newY] === '1' &&
            !visited[newX][newY]
          ) {
            stack.push([newX, newY]);
          }
        }
      }
    }
  }

  bfs(x, y, visited) {
    let queue = [[x, y]];
    visited[x][y] = true;
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      for (const [dx, dy] of directions) {
        const newX = cx + dx;
        const newY = cy + dy;
        if (
          this.isInBounds( newX, newY) &&
          this.grid[newX][newY] === '1' &&
          !visited[newX][newY]
        ) {
          queue.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }
  }

  // Hàm để đếm số lượng đảo
  numIslands() {
    if (!this.grid || this.grid.length === 0) return 0;

    const visited = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(false)
    );
    let count = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.grid[i][j] === '1' && !visited[i][j]) {
        //   this.dfs(i, j, visited);
          this.bfs(i, j, visited);
          count++;
        }
      }
    }
    console.log('visited', visited);
    return count;
  }
}

// Ví dụ
const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

const graph = new Graph(grid);
console.log(graph.numIslands()); // Kết quả: 3

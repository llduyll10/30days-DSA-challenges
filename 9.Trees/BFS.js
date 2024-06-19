class TreeNode {
    constructor(value) {
        this.value = value; // Giá trị của nút
        this.left = null;   // Con trỏ tới nút con bên trái
        this.right = null;  // Con trỏ tới nút con bên phải
    }
}
function bfsTraversal(root) {
    let result = []; // Mảng chứa kết quả của việc duyệt cây
    let queue = [root]; // Hàng đợi để lưu trữ các nút cần duyệt, bắt đầu với nút gốc

    while (queue.length > 0) {
        let currentNode = queue.shift(); // Lấy nút đầu tiên trong hàng đợi
        result.push(currentNode.value); // Thêm giá trị của nút hiện tại vào kết quả

        if (currentNode.left !== null) {
            queue.push(currentNode.left); // Thêm cây con bên trái vào hàng đợi
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right); // Thêm cây con bên phải vào hàng đợi
        }
    }

    return result;
}

const root = new TreeNode('R');
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;
console.log('Duyệt cây theo BFS:', bfsTraversal(root)); // Kết quả: R A B C D E F G

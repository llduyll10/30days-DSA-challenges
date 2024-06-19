// Định nghĩa lớp TreeNode cho cây nhị phân
class TreeNode {
    constructor(value) {
        this.value = value; // Giá trị của nút
        this.left = null;   // Con trỏ tới nút con bên trái
        this.right = null;  // Con trỏ tới nút con bên phải
    }
}

// Duyệt Pre-order (Tiền thứ tự): Duyệt nút hiện tại trước,
// sau đó đến cây con bên trái, và cuối cùng là cây con bên phải.
function preOrderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // In giá trị của nút hiện tại trước khi duyệt các cây con
        preOrderTraversal(node.left); // Duyệt cây con bên trái
        preOrderTraversal(node.right); // Duyệt cây con bên phải
    }
}

// Duyệt In-order (Trung thứ tự): Duyệt cây con bên trái trước,
// sau đó đến nút hiện tại, và cuối cùng là cây con bên phải.
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Duyệt cây con bên trái
        console.log(node.value);    // In giá trị của nút hiện tại giữa khi duyệt cây con bên trái và bên phải
        inOrderTraversal(node.right); // Duyệt cây con bên phải
    }
}

// Duyệt Post-order (Hậu thứ tự): Duyệt cây con bên trái trước,
// sau đó đến cây con bên phải, và cuối cùng là nút hiện tại.
function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left); // Duyệt cây con bên trái
        postOrderTraversal(node.right); // Duyệt cây con bên phải
        console.log(node.value); // In giá trị của nút hiện tại sau khi duyệt cây con bên trái và bên phải
    }
}

// Tạo các nút của cây nhị phân
const root = new TreeNode('R');
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');

// Liên kết các nút với nhau theo cấu trúc cây đã cho
root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

// In cấu trúc của cây nhị phân đã tạo
console.log('Cấu trúc của cây nhị phân:');
console.log('   R');
console.log('  / \\');
console.log(` A   B`);
console.log(`/ \\ / \\`);
console.log(`C  D E  F`);
console.log('      /');
console.log(`     G`);

// Duyệt cây theo Pre-order
console.log('\nDuyệt cây theo Pre-order:');
preOrderTraversal(root); // Kết quả: R -> A -> C -> D -> B -> E -> F -> G

// Duyệt cây theo In-order
console.log('\nDuyệt cây theo In-order:');
inOrderTraversal(root); // Kết quả: C -> A -> D -> R -> E -> G -> B -> F

// Duyệt cây theo Post-order
console.log('\nDuyệt cây theo Post-order:');
postOrderTraversal(root); // Kết quả: C -> D -> A -> G -> E -> F -> B -> R

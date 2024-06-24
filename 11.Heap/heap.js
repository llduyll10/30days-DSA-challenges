class MinHeap {
  constructor() {
    this.heap = []; // Khởi tạo một mảng rỗng để lưu trữ heap
  }

  buildHeap(array) {
    this.heap = array; // Gán mảng đầu vào cho heap
    // Bắt đầu từ nửa dưới của mảng để heapify từng phần tử
    for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
      this.heapifyDown(i); // Heapify từ các nút không phải lá từ dưới lên
    }
  }

  heapifyDown(index) {
    let smallest = index; // Khởi tạo smallest là chỉ số hiện tại
    const leftChild = 2 * index + 1; // Chỉ số của con trái
    const rightChild = 2 * index + 2; // Chỉ số của con phải

    // Kiểm tra nếu con trái nhỏ hơn nút hiện tại
    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[smallest]
    ) {
      smallest = leftChild; // Cập nhật smallest nếu con trái nhỏ hơn
    }

    // Kiểm tra nếu con phải nhỏ hơn nút hiện tại
    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[smallest]
    ) {
      smallest = rightChild; // Cập nhật smallest nếu con phải nhỏ hơn
    }

    // Nếu nút nhỏ nhất không phải là nút hiện tại, hoán đổi và tiếp tục heapify
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ]; // Hoán đổi vị trí
      this.heapifyDown(smallest); // Đệ quy gọi heapifyDown tại nút nhỏ nhất
    }
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2); // Chỉ số của cha
    // Kiểm tra nếu nút hiện tại nhỏ hơn cha của nó
    if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ]; // Hoán đổi vị trí
      this.heapifyUp(parentIndex); // Đệ quy gọi heapifyUp tại chỉ số cha
    }
  }

  insert(value) {
    this.heap.push(value); // Thêm phần tử vào cuối mảng
    this.heapifyUp(this.heap.length - 1); // Heapify up từ vị trí mới thêm
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop(); // Thay thế root bằng phần tử cuối cùng
    this.heapifyDown(0); // Heapify down từ gốc
    return root;
  }
}

const heap = new MinHeap();
heap.buildHeap([7, 12, 6, 10, 17, 15, 2, 4]);
console.log(heap.heap); // Output: [1, 4, 3, 10, 5]

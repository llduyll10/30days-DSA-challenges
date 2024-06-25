class PriorityQueue {
  constructor() {
    this.heap = []; // Khởi tạo một mảng rỗng để lưu trữ các phần tử trong heap
  }

  // Hàm hoán đổi hai phần tử trong heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; // Hoán đổi vị trí của hai phần tử tại chỉ số i và j
  }

  // Hàm thêm phần tử vào hàng đợi với độ ưu tiên
  enqueue(element, priority) {
    const node = { element, priority }; // Tạo một đối tượng mới chứa phần tử và độ ưu tiên của nó
    this.heap.push(node); // Thêm đối tượng này vào cuối heap
    this.heapifyUp(this.heap.length - 1); // Gọi heapifyUp để duy trì tính chất của heap
  }

  // Hàm lấy phần tử có độ ưu tiên cao nhất và xóa nó khỏi hàng đợi
  dequeue() {
    if (this.heap.length === 0) {
      // Nếu heap rỗng, trả về null
      return null;
    }
    if (this.heap.length === 1) {
      // Nếu chỉ có một phần tử trong heap, trả về phần tử đó
      return this.heap.pop();
    }

    const root = this.heap[0]; // Lưu phần tử gốc (phần tử có độ ưu tiên cao nhất)
    this.heap[0] = this.heap.pop(); // Đưa phần tử cuối cùng lên đầu
    this.heapifyDown(0); // Gọi heapifyDown để duy trì tính chất của heap
    return root; // Trả về phần tử gốc ban đầu
  }

  // Hàm lấy phần tử có độ ưu tiên cao nhất mà không xóa nó
  peek() {
    return this.heap.length === 0 ? null : this.heap[0]; // Trả về phần tử gốc nếu heap không rỗng, ngược lại trả về null
  }

  // Hàm duy trì tính chất heap khi thêm phần tử
  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2); // Tính chỉ số của phần tử cha

    while (
      currentIndex > 0 &&
      this.heap[currentIndex].priority < this.heap[parentIndex].priority // Nếu phần tử hiện tại có độ ưu tiên thấp hơn phần tử cha
    ) {
      this.swap(currentIndex, parentIndex); // Hoán đổi vị trí của chúng
      currentIndex = parentIndex; // Cập nhật chỉ số hiện tại
      parentIndex = Math.floor((currentIndex - 1) / 2); // Tính lại chỉ số của phần tử cha
    }
  }

  // Hàm duy trì tính chất heap khi xóa phần tử
  heapifyDown(index) {
    let currentIndex = index;
    const length = this.heap.length;
    let leftChildIndex = 2 * currentIndex + 1; // Chỉ số của con trái
    let rightChildIndex = 2 * currentIndex + 2; // Chỉ số của con phải
    let smallest = currentIndex;

    if (
      leftChildIndex < length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority // Nếu con trái có độ ưu tiên thấp hơn phần tử hiện tại
    ) {
      smallest = leftChildIndex; // Cập nhật chỉ số nhỏ nhất
    }

    if (
      rightChildIndex < length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority // Nếu con phải có độ ưu tiên thấp hơn phần tử nhỏ nhất hiện tại
    ) {
      smallest = rightChildIndex; // Cập nhật chỉ số nhỏ nhất
    }

    if (smallest !== currentIndex) {
      // Nếu chỉ số nhỏ nhất không phải là phần tử hiện tại
      this.swap(currentIndex, smallest); // Hoán đổi chúng
      this.heapifyDown(smallest); // Gọi đệ quy heapifyDown tại chỉ số nhỏ nhất
    }
  }
}

// Ví dụ sử dụng PriorityQueue
const pq = new PriorityQueue();
pq.enqueue('Task 1', 2);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 3);

console.log(pq.heap)

console.log(pq.peek()); // { element: 'Task 2', priority: 1 }
console.log(pq.dequeue()); // { element: 'Task 2', priority: 1 }
console.log(pq.peek()); // { element: 'Task 1', priority: 2 }

// Định nghĩa lớp HashTable để tạo và quản lý bảng băm
class HashTable {
  constructor(size = 10) {
    // Khởi tạo mảng keyMap với kích thước cố định
    this.keyMap = new Array(size).fill(null).map(() => []);
  }

  // Hàm băm để chuyển đổi giá trị thành chỉ số trong mảng
  _hash(value) {
    let total = 0;
    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < value.length; i++) {
      // Cộng mã ASCII của ký tự vào tổng
      total += value.charCodeAt(i);
    }
    // Lấy phần dư của tổng chia cho kích thước bảng băm
    return total % this.keyMap.length;
  }

  // Hàm add để thêm giá trị vào bảng băm
  add(value) {
    const index = this._hash(value); // Tính chỉ số từ giá trị
    const bucket = this.keyMap[index]; // Lấy bucket tại chỉ số đã tính
    if (!bucket.includes(value)) {
      // Nếu giá trị chưa có trong bucket
      bucket.push(value); // Thêm giá trị vào bucket
    }
  }

  // Hàm contains để kiểm tra giá trị có trong bảng băm hay không
  contains(value) {
    const index = this._hash(value); // Tính chỉ số từ giá trị
    const bucket = this.keyMap[index]; // Lấy bucket tại chỉ số đã tính
    return bucket.includes(value); // Trả về true nếu giá trị có trong bucket, ngược lại false
  }

  remove(value) {
    const index = this._hash(value);
    const bucket = this.keyMap[index];
    if (bucket.includes(value)) {
      bucket.splice(bucket.indexOf(value), 1);
    }
  }


}

// Ví dụ sử dụng lớp HashTable
const hashTable = new HashTable();

// Thêm các giá trị vào bảng băm
hashTable.add('Jones');
hashTable.add('Lisa');
hashTable.add('Bob');
hashTable.add('Siri');
hashTable.add('Pete');
hashTable.add('Stuart');

// In ra bảng băm
console.log(hashTable.keyMap);
// Kiểm tra xem 'Stuart' có trong bảng băm hay không
console.log('Contains Stuart:', hashTable.contains('Stuart')); // Hiển thị kết quả kiểm tra

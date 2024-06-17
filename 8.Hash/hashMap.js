// Định nghĩa lớp HashMap để tạo và quản lý bảng băm
class HashMap {
  // Constructor để khởi tạo kích thước và các bucket
  constructor(size = 100) {
    this.size = size; // Khởi tạo kích thước của bảng băm
    this.buckets = Array.from({ length: size }, () => []); // Tạo các bucket, mỗi bucket là một mảng rỗng
  }

  // Hàm băm để chuyển đổi khóa thành chỉ số trong mảng
  hashFunction(key) {
    let total = 0;
    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < key.length; i++) {
      // Cộng mã ASCII của ký tự vào tổng
      total += key.charCodeAt(i);
    }
    // Lấy phần dư của tổng chia cho kích thước bảng băm
    return total % this.size;
  }

  // Hàm put để thêm hoặc cập nhật cặp khóa-giá trị trong bảng băm
  put(key, value) {
    const index = this.hashFunction(key); // Tính chỉ số từ khóa
    const bucket = this.buckets[index]; // Lấy bucket tại chỉ số đã tính
    //item[0] là khóa, item[1] là giá trị
    const existing = bucket.find((item) => item[0] === key); // Tìm phần tử với khóa đã cho -
    if (existing) {
      existing[1] = value; // Cập nhật giá trị nếu khóa đã tồn tại
    } else {
      bucket.push([key, value]); // Thêm cặp khóa-giá trị mới nếu khóa chưa tồn tại
    }
  }

  // Hàm get để lấy giá trị dựa trên khóa
  get(key) {
    const index = this.hashFunction(key); // Tính chỉ số từ khóa
    const bucket = this.buckets[index]; // Lấy bucket tại chỉ số đã tính
    const item = bucket.find((item) => item[0] === key); // Tìm phần tử với khóa đã cho
    return item ? item[1] : undefined; // Trả về giá trị nếu khóa được tìm thấy, ngược lại trả về undefined
  }

  // Hàm containsKey để kiểm tra xem khóa có tồn tại hay không
  containsKey(key) {
    const index = this.hashFunction(key); // Tính chỉ số từ khóa
    const bucket = this.buckets[index]; // Lấy bucket tại chỉ số đã tính
    return bucket.some((item) => item[0] === key); // Trả về true nếu khóa tồn tại, ngược lại false
  }

  // Hàm remove để loại bỏ cặp khóa-giá trị khỏi bảng băm
  remove(key) {
    const index = this.hashFunction(key); // Tính chỉ số từ khóa
    const bucket = this.buckets[index]; // Lấy bucket tại chỉ số đã tính
    const itemIndex = bucket.findIndex((item) => item[0] === key); // Tìm vị trí của phần tử với khóa đã cho
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1); // Loại bỏ cặp khóa-giá trị nếu khóa được tìm thấy
    }
  }

  // Hàm printMap để in ra tất cả các cặp khóa-giá trị trong bảng băm
  printMap() {
    console.log('HashMap Contents:');
    // Duyệt qua từng bucket và in ra các cặp khóa-giá trị
    this.buckets.forEach((bucket, index) => {
      console.log(
        `Bucket ${index}: ${bucket
          .map((item) => `[${item[0]}, ${item[1]}]`)
          .join(', ')}`
      );
    });
  }
}

// Ví dụ sử dụng lớp HashMap
const hashMap = new HashMap(10); // Tạo một bảng băm với kích thước 10

// Thêm các cặp khóa-giá trị vào bảng băm
hashMap.put('name', 'John');
hashMap.put('age', 30);
hashMap.put('city', 'New York');

// In ra tất cả các cặp khóa-giá trị trong bảng băm
hashMap.printMap();

console.log("Get 'name':", hashMap.get('name')); // Lấy giá trị của khóa 'name'
console.log("Contains key 'age':", hashMap.containsKey('age')); // Kiểm tra xem khóa 'age' có tồn tại hay không
console.log("Removing 'city'"); // Loại bỏ khóa 'city'
hashMap.remove('city');
console.log("Contains key 'city':", hashMap.containsKey('city')); // Kiểm tra lại xem khóa 'city' có tồn tại hay không

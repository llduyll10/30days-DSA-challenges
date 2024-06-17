// Hàm insertionSort để sắp xếp một mảng bằng thuật toán sắp xếp chèn
function insertionSort(array) {
  // Bắt đầu từ phần tử thứ hai của mảng
  for (let i = 1; i < array.length; i++) {
    // Lưu lại giá trị hiện tại
    let currentValue = array[i];

    // Biến j dùng để tìm vị trí chèn phù hợp cho currentValue
    let j = i - 1;

    // Dịch chuyển các phần tử lớn hơn currentValue sang phải
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    // Chèn currentValue vào vị trí thích hợp
    array[j + 1] = currentValue;
  }

  // Trả về mảng đã được sắp xếp
  return array;
}

// Ví dụ sử dụng hàm insertionSort
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = insertionSort(array);
console.log(sortedArray); // [5, 7, 23, 32, 34, 62]

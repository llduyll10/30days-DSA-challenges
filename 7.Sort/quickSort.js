// Hàm quickSort để sắp xếp một mảng bằng thuật toán quick sort
function quickSort(array) {
    // Nếu mảng có ít hơn hoặc bằng 1 phần tử thì không cần sắp xếp
    if (array.length <= 1) {
        return array;
    }

    // Chọn phần tử chốt (pivot), ở đây chọn phần tử ở giữa mảng
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];

    // Khởi tạo các mảng để chứa các phần tử nhỏ hơn, lớn hơn và bằng pivot
    const less = [];
    const greater = [];
    const equal = [];

    // Phân loại các phần tử vào các mảng tương ứng
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            less.push(array[i]);
        } else if (array[i] > pivot) {
            greater.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }

    // Đệ quy sắp xếp các mảng less và greater, rồi hợp nhất kết quả
    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Ví dụ sử dụng hàm quickSort
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(array);
console.log(sortedArray); // [5, 7, 23, 32, 34, 62]

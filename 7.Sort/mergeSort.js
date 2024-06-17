// Hàm mergeSort để sắp xếp một mảng bằng thuật toán merge sort
function mergeSort(array) {
    // Nếu mảng có ít hơn hoặc bằng 1 phần tử thì không cần sắp xếp
    if (array.length <= 1) {
        return array;
    }

    // Tìm chỉ số giữa để chia mảng thành hai nửa
    const middle = Math.floor(array.length / 2);

    // Chia mảng thành hai nửa
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Đệ quy sắp xếp hai nửa và hợp nhất lại
    return merge(mergeSort(left), mergeSort(right));
}

// Hàm merge để hợp nhất hai mảng đã được sắp xếp
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // So sánh từng phần tử của hai mảng và thêm phần tử nhỏ hơn vào mảng kết quả
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Tăng chỉ số của mảng bên trái
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Tăng chỉ số của mảng bên phải
        }
    }

    // Thêm các phần tử còn lại của mảng bên trái (nếu có)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Thêm các phần tử còn lại của mảng bên phải (nếu có)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    // Trả về mảng đã được hợp nhất
    return result;
}

// Ví dụ sử dụng hàm mergeSort
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [5, 7, 23, 32, 34, 62]

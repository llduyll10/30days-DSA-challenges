// Javascript program for find the largest
// three elements in an array

// Function to print three largest elements
function print3LargestNumbers(arr) {
    if (arr.length < 3) {
      console.log('Invalid Input: Array must have at least three elements');
      return;
    }

    let firstLargest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    let thirdLargest = Number.MIN_VALUE;

    for (let num of arr) {
      if (num > firstLargest) {
        thirdLargest = secondLargest;
        secondLargest = firstLargest;
        firstLargest = num;
      } else if (num > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = num;
      } else if (num > thirdLargest) {
        thirdLargest = num;
      }
    }

    console.log(`Three largest elements are ${firstLargest}, ${secondLargest}, ${thirdLargest}`);
    return [firstLargest, secondLargest, thirdLargest];
  }

// Driver code
let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;

let arrResult = print3LargestNumbers(arr, n);
console.log(arrResult);

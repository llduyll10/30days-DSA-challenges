// Program to implement iterative Binary Search

function binarySearch(arr, x){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while(high >= low){
        mid = low + Math.floor((high - low) / 2);
        if(arr[mid] === x){
            return mid;
        }
        //
        if(arr[mid] > x){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1
}


arr =new Array(2, 3, 4, 10, 40);
x = 10;
result = binarySearch(arr, x);

if(result == -1){
    console.log("Element not found");
}
else{
    console.log("Element found at index: " + result);
}

// Program to implement iterative Binary Search with recursion

function binarySearchRecursion(arr, low, high, x){
    if(high >= low){
        let mid = low + Math.floor((high - low) / 2);
        if(arr[mid] === x){
            return mid;
        }
        if(arr[mid] > x){
            return binarySearchRecursion(arr, low, mid-1, x)
        }
        else{
            return binarySearchRecursion(arr, mid+1, high, x)
        }
    }
    return -1
}


arrRecursion =new Array(2, 3, 4, 10, 40);
let y = 40;
let low = 0;
let high = arrRecursion.length - 1;

let resultRecursion = binarySearchRecursion(arrRecursion, 0, high, y);
console.log('resultRecursion',resultRecursion)
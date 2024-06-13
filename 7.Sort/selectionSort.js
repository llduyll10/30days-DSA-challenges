// Javascript program for implementation of selection sort

function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function selectionSort(arr){
    for(let i =0; i < arr.length - 1; i++){
        var minIdx = i;
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
}

let arr = [5, 4, 3, 2, 1]
selectionSort(arr)
console.log(arr)
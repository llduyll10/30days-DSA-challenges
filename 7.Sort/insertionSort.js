function insertionSort(arr){
    let i,j,tmp
    for(i = 1; i < arr.length; i++){
        tmp = arr[i]
        j = i - 1
        while(j>=0 && arr[j] > tmp){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = tmp
    }
}

// Driver code
let arr = [5, 2, 8, 3, 1]
insertionSort(arr)
console.log(arr)
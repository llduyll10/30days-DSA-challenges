function bubbleSort(arr){
    let i,j,tmp
    let swap
    for(i =0;i<arr.length -1; i++){
        swap = false
        for(j=0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
                swap = true
            }
        }
        if(!swap){
            break
        }
    }
}

let arr = [5, 2, 8, 3, 1]
bubbleSort(arr)
console.log(arr)
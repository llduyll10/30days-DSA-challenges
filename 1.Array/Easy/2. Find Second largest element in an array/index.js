function findSecondLargest(arr) {
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    for (const num of arr){
        if(num > largest){
            secondLargest =largest
            largest = num
        }
        else if(num > secondLargest && num != largest){
            secondLargest = num
        }
    }
    return secondLargest
}

let arr = [12, 35, 1, 10, 34, 1]
console.log('The second largest element is', findSecondLargest(arr))
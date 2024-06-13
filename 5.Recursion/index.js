// EX1: Print N to 1 without loop
function printNto1(n) {
    if (n < 1) {
        return
    }
    console.log(n)
    printNto1(n - 1)
}

// Driver code
printNto1(5)

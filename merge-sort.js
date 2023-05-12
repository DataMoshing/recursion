const merge = (leftArr, rightArr) => {
    const arr = [] // mergeSort leftArr = [5, 9, 62] // mergeSort rightArr = [1, 1, 5]

    // While there is a left array and right array
    while (leftArr.length && rightArr.length) {
        // If left array at index 0 less than right array at index 0
        if (leftArr[0] < rightArr[0]) {
            // Push first removed leftArr element to arr if element less than rightArr
            arr.push(leftArr.shift())
        } else {
            // Push first removed rightArr element to arr if rightArr element less than leftArr
            arr.push(rightArr.shift())
        }
    }

    // Create new array combining 3 arrays
    return [...arr, ...leftArr, ...rightArr]
}

const mergeSort = (arr) => { // arr = [9, 5, 62, 5, 1, 1]
    if (arr.length <= 1) return arr

    // Find middle of array
    let midPoint = Math.ceil(arr.length / 2) // midPoint = 3

    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint))

    return merge(left, right)
    // leftArr = [5, 9, 62] 
    // rightArr = [1, 1, 5]

    // Outcome after merge call arr = [1, 1, 5, 5, 9, 62]
}

console.log(mergeSort([9, 5, 62, 5, 1, 1]))

/* 
<-- Recursion -->

arr = [9, 5, 62, 5, 1, 1]
let midPoint = Math.ceil(arr.length / 2) midPoint = arr.length / 2 [9, 5, 62, 5, 1, 1] = 3
arr = [9, 5, 62]
arr = [9, 5]
arr = [9]
let left = mergeSort(arr.slice(0, midPoint)) Recursively call left array until <= 1 element is left

Once 1 element is left return 

Repeat with right array
let right = mergeSort(arr.slice(midPoint))

Call merge which sorts elements leftArr and rightArr from lowest element to highest element
*/

const search = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        mid = (left + right) / 2
        if (arr[mid] == target) {
            return mid
        } else if (target < arr[mid]) {
            right = mid -1
        }   else {
            left = mid + 1
        }
    }

    return -1
}

const arr = [ -3, -1, 1, 2, 4, 5, 7, 9, 12, 14, 15 ]
const target = 15;

console.log(search(arr, target))

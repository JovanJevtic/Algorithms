const binarySearch = (array, low, high, target) => {
  if (low > high) {
    console.log(`Not found`)
    return -1
  }

  //* Calculate the midpoint of array
  let mid = Math.floor((low + high) / 2)

  if (target == array[mid]) {
    console.log('Target is found at index: ', mid)
    return mid;
  } 
  
  else if (target < array[mid]) {
    return binarySearch(array, low, mid - 1, target);
  }

  else {
    return binarySearch(array, mid + 1, high, target);
  }
}

// ?Testing:
const testArr = [1, 3, 4, 7, 8, 12, 18, 21, 75, 32]
const target = 21

const start = 0
const end = testArr.length 

console.log(binarySearch(testArr, start, end, target))

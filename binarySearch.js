const binarySearch = (array, low, high, target) => {
  if(low > high) {
    return -1
  }

  //calculate the midpoint of array
  let mid = Math.floor( (low+ high) / 2)

  if (target == array[mid]) {
    console.log('Target is found at index: ', mid)
    return mid;
  } 
  
  else if (target < array[mid]) {
    return binarySearch(array, low, mid-1, target);
  }
  else {
    return binarySearch(array, mid+1, high, target);
  }
}
// To test:
console.log(binarySearch([1,5,7,8,9,10,15], 0, 6, 5))

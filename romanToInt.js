const romanToInt = s => {
    if (!s || s.length === 0) return null

    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
  
    let i = s.length - 1
    let result = map.get(s[i])
  
    while (i > 0) {
      const curr = map.get(s[i])
      const prev = map.get(s[i - 1])
  
      if (prev >= curr) {
        result += pre
      } else {
        result -= prev
      }
  
      i--
    }
    return result
};

//* Testing
let result = romanToInt(123)
console.log(result)
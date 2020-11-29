const shuffle = (nums, n) => {
    let res = []

    for (i = 0; i < n; i++) {
        res.push( nums[i], nums[i+n] )
    }

    return res
}

//*Testing
let nums = [1, 3, 2, 12, 51, 42, 23, 51]
let n = 3

console.log(shuffle(nums, n))
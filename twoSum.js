const twoSum = (nums, target) => {
  
    let prev = {}
    
    for (let i = 0; i < nums.length; i++) {
        let requiredNum = target - nums[i]
        
        if (requiredNum in prev) {
            console.log('Matching pair numbers are on positions:')
            return[prev[requiredNum], i]
        }
        
        prev[nums[i]] = i
        
    }
    
    return null
};

//? Testing

const numsTest = [1, 3, 4, 6, 7, 9, 11, 14]
const targetTest = 12 

console.log(twoSum(numsTest, targetTest))
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return ""                                                                                                                                                                       
    
    const str = strs[0]
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            
            const next = strs[j]
            
            if (next[i] !== str[i]) {
                return next.slice(0, i)
            }
        }
    }

    return str
};


//* Testing
const strs = ['food', 'foo', 'foobalo']
let result = longestCommonPrefix(strs)
console.log(result)

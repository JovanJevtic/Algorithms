class Stack {
  
    constructor() {
      this.items = []
      this.count = 0;
    }
  
    push(value) {
      this.items[this.count] = value
      this.count++
      //console.log(`${value} added to position ${this.count}`)
      return this.count - 1
    }
  
    pop() {
      if (this.count == 0) {
          return "No elements to remove";
      }
           
      let deletedItem = this.items[this.count - 1];
      this.count--;
      console.log(`Popped ${deletedItem}`)
      return deletedItem;
    }
  
}
  
function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLowerCase();
  
    const wordStorage = new Stack();
  
    let reversedWord = ''
    let isPalindrome = 'Not Palindrome'
  
    for (let i = 0; i < str.length; i++) {
      wordStorage.push(str[i])
    }
  
    for (let i = 0; i < str.length; i++) {
      reversedWord += wordStorage.pop();
    }
  
    if (str === reversedWord) {
      isPalindrome = 'String is palindrome';
    }
  
    return {isPalindrome, reversedWord};
}
  
//? Testing 

//console.log(palindrome('Da li je ovo palindrome'))
console.log(palindrome("A man, a plan, a canal. Panama"))
//console.log(palindrome("never odd or even"))
//console.log(palindrome("not a palindrome"))

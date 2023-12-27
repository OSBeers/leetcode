/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[\W_]/g, '')
  let reversed = ''

  for(let char of str){
      reversed = char + reversed
  }
  return reversed === str
};
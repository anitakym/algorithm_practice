/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = []
  var paren_map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (var i = 0; i < s.length; i++) {
    if (!paren_map[s[i]]) {
      stack.push(s[i])
    } else if (stack.length === 0 || stack.pop() !== paren_map[s[i]]){
      return false
    }
  }
  return stack.length === 0
}
function isMath(left :string, right :string) :Boolean {
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  if (left === '(' && right === ')') return true
  return false
}

export default function matchBracket(str :string) :Boolean {
  const length = str.length
  if (length === 0) return true
  let stack = []
  const leftSymbols = '{[('
  const rightSymbols = '}])'
  for (let i = 0; i < length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      stack.push(s)
    } else if(rightSymbols.includes(s)) {
      const top = stack[stack.length - 1]
      if (isMath(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return true
}

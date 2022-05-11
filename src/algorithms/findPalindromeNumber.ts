export function findPalindromeNumber1 (max :number) :number[] {
  const res :number[] = []
  if (max < 0) return res

  for (let i = 1; i <= max; i++) {
    const n = i.toString()
    if (n === n.split('').reverse().join('')) {
      res.push(i)
    }
  }
  return res
}

export function findPalindromeNumber2 (max :number) :number[] {
  const res :number[] = []
  if (max < 0) return res

  for (let i = 1; i <= max; i++) {
    const s = i.toString()
    let startIndex = 0
    let endIndex = s.length - 1
    let flag = true
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false
        break
      } else {
        startIndex++
        endIndex--
      }
    }
    if (flag) res.push(i)
  }
  return res
}

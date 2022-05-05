export function findToNumbers (arr: number[], num: number) :number[] {
  const length = arr.length
  const res :number[] = [] 
  if (length === 0) return res
  for (let i = 0; i < length; i++) {
    let n1 = arr[i]
    let flag = false
    for (let j = i + 1; j < length; j++) {
      let n2 = arr[j]
      if ((n1 + n2) === num) {
        flag = true
        res.push(n1)
        res.push(n2)
      }
      if (flag) break
    }
    if (flag) break
  }
  return res
}

export function findToNumbers2(arr: number[], num: number) :number[] {
  const length = arr.length
  const res :number[] = [] 
  if (length === 0) return res
  let i = 0
  let j = length - 1
  while( i < j) {
    let n1 = arr[i]
    let n2 = arr[j]
    let sum = n1 + n2
    if (sum < num) {
      i++
    } else if (sum > num) {
      j--
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}

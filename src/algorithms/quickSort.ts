export function quickSort1 (arr: number[]) :number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.splice(midIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < length; i++) {
    let n = arr[i]
    if (midValue < n) {
      right.push(n)
    } else if (midValue > n) {
      left.push(n)
    }
  }
  return quickSort1(left).concat([midValue], quickSort1(right))
}


export function quickSort2 (arr: number[]) :number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      let n = arr[i]
      if (n < midValue) {
        left.push(n)
      } else {
        right.push(n)
      }
    }
    
  }
  return quickSort2(left).concat([midValue], quickSort2(right))
}

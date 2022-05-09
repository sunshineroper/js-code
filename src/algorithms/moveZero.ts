export function moveZero1(arr :number[]) {
  let length = arr.length
  if (length === 0) return
  let zeroLength = 0
  for (let i = 0; i < length - zeroLength; i++) {
    let n = arr[i]
    if (n === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i-- // 防止出现连续0
      zeroLength++
    }
  }
}   
export function moveZero (arr :number[]) :void {
  let length = arr.length
  if (length === 0) return
  let i = 0
  let j = -1
  for (i = 0; i < length; i++) {
    let n = arr[i]
    if (n === 0) {
      if (j === -1) {
          j = i
      }
    }

    if (n !== 0 && j !== -1) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j++
    }
  
  }
}

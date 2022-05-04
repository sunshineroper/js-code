// 
export const rotate1 = (arr :number[], key :number) => {
  let length = arr.length
  if (!key || length === 0) return arr
  const step = Math.abs(key % length)
  for (let i = 0; i < step; i++) {
    let n:number | null = arr.pop()
    if (n !== null) arr.unshift(n as number)
  }
  return arr
}

export const totate1 = (arr: number[], key :number) => {
  let length = arr.length
  if (!key || length === 0) return arr
  const step = Math.abs(key % length)
  let arr1 = arr.slice(0, length - step)
  let arr2 = arr.concat(arr1)
  return arr2
}

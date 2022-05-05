export function binarySearch1 (arr: number[], item: number) {
  const length = arr.length
  if (length === 0) return -1
  let startIndex = 0
  let endIndex = length - 1
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    let midValue = arr[midIndex]
    if (item < midValue) {
      endIndex = midIndex - 1
    } else if (item > midValue) {
      startIndex = midIndex + 1
    } else {
      return midIndex
    }
  }
  return -1
}


export function binarySearch2 (arr: number[], item: number, startIndex? :number, endIndex?: number) {
  const length = arr.length
  if (length === 0) return -1
  if (!startIndex) startIndex = 0
  if (!endIndex) endIndex = length - 1
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]
  if (item < midValue) {
    return binarySearch2(arr, item, startIndex , midIndex - 1)
  } else if (item > midValue) {
    return binarySearch2(arr, item, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}

import { binarySearch1, binarySearch2 } from '../chapter1/binarySearch'

describe('二分查找', () => {
  it('循环查找, 正常情况', () => {
    const arr = [1,2,3,4,5,6].sort((a,b) => a -b)
    let res = binarySearch1(arr, 4)
    expect(res).toBe(3)
    res = binarySearch1(arr, 2)
    expect(res).toBe(1)
  })

  it('递归查找, 正常情况',  () => {
    const arr = [1,2,3,4,5,6].sort((a,b) => a -b)
    let res = binarySearch2(arr, 4)
    expect(res).toBe(3)
    res = binarySearch1(arr, 2)
    expect(res).toBe(1)
  })
})

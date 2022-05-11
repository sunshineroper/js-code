import { quickSort1, quickSort2 } from '../../algorithms/quickSort'

describe('快速排序', () => {
  it('正常情况', () => {
    const arr1: number[] = [22,3,33,5,44,6]
    let res = quickSort1(arr1)
    expect(res).toEqual([3,5,6,22,33,44])
    const arr2: number[] = [22,3,33,5,44,6]
    res = quickSort2(arr2)
    expect(res).toEqual([3,5,6,22,33,44])
  })
  it('空数组', () => {
    const arr: number[] = []
    let res = quickSort1(arr)
    expect(res).toEqual([])
    res = quickSort2(arr)
    expect(res).toEqual([])
  })
})

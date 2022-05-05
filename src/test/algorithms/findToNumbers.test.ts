import { findToNumbers2 } from '../../algorithms/findToNumbers'

describe('找出其中和为n的两个元素', () => {
  it('正常情况', () => {
    const arr = [1,2,3,4,5,6,7]
    const key = 11
    const res = findToNumbers2(arr, key)
    expect(res).toEqual([4, 7])
  })
  it('空数组', () => {
    const arr = []
    const key = 11
    const res = findToNumbers2(arr, key)
    expect(res).toEqual([])
  })
  it('没有找到', () => {
    const arr = [1,2,3,4,5,6,7]
    const key = 120
    const res = findToNumbers2(arr, key)
    expect(res).toEqual([])
  })
})

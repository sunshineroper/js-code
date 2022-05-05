import { rotate1 } from '../../algorithms/rotate'

describe('数组旋转k步', () => {
  test('正常情况', () => {
    const arr = [4,5,6,1,2,3]
    const key = 3
    const res = rotate1(arr, key)
    expect(res).toEqual([1,2,3,4,5,6])
  })
  test('数组为空', () => {
    const arr = []
    const key = 3
    const res = rotate1(arr, key)
    expect(res).toEqual([])
  })
  test('key不是数字', () => {
    const arr = [4,5,6,1,2,3]
    const key = 'c'
    // @ts-ignore
    const res = rotate1(arr, key)
    expect(res).toEqual([4,5,6,1,2,3])
  })
  test('传入的数字是负数', () => {
    const arr = [4,5,6,1,2,3]
    const key = -3
    const res = rotate1(arr, key)
    expect(res).toEqual([1,2,3,4,5,6])
  })
})

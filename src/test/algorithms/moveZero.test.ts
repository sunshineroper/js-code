import { moveZero1, moveZero } from '../../algorithms/moveZero'
describe('将数组中的0移动到末尾', () => {
  it('正常情况', () => {
    let arr = [1,2,0,3,0,4,0,5,6]
    moveZero(arr)
    expect(arr).toEqual([
      1, 2, 3, 4, 5,
      6, 0, 0, 0
    ])
  })
  it('连续遇到0', () => {
    let arr = [1,2,0,0,3,0,4,0,5,6]
    moveZero1(arr)
    expect(arr).toEqual([
      1, 2, 3, 4, 5,
      6, 0, 0, 0, 0
    ])
  })
})

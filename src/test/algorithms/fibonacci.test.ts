import { fibonacci, fibonacci1 } from '../../algorithms/fibonacci'
describe('求斐波那契数列的第N值', () => {
  it('正常情况', () => {
    // 1 1 2 3 5 8 13 21 34 55
    let res = fibonacci1(9)
    expect(res).toBe(34)
    res = fibonacci(8)
    expect(res).toBe(21)
    res = fibonacci(10)
    expect(res).toBe(55)
  })
})

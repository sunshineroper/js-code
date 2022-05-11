import { findPalindromeNumber1, findPalindromeNumber2 } from "../../algorithms/findPalindromeNumber"

describe('回文', () => {
  it('正常情况', () => {
    let res :number[] = findPalindromeNumber1(200)
    expect(res.length).toBe(28)
    res = findPalindromeNumber2(200)
    expect(res.length).toBe(28)
  })
})

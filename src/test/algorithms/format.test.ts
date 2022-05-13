import { format1, format2 } from "../../algorithms/format"

describe('转千分位', () => {
  it('正常情况', () => {
    const n = 98729234
    let res = format1(n)
    expect(res).toBe('98,729,234')
    res = format2(n)
    expect(res).toBe('98,729,234')
  })
})

import matchBracket from '../chapter1/matchBracket'

describe('字符串括号匹配测试', () => {
  it('正常情况', () => {
    const str = '{p([c])}c'
    const res = matchBracket(str)
    expect(res).toBe(true)
  })
  it('不匹配', () => {
    const str = '{p[(c])}c'
    const res = matchBracket(str)
    expect(res).toBe(false)
  })
  it('空字符串', () => {
    const str = ''
    const res = matchBracket(str)
    expect(res).toBe(true)
  })
})

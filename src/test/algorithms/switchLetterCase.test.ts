import { switchLetterCase1, switchLetterCase2 } from '../../algorithms/switchLetterCase'
describe('切换字母大小写', () => {
  it('正常情况', () => {
    const s = '12aBc32'
    let res = switchLetterCase1(s)
    expect(res).toBe('12AbC32')
    res = switchLetterCase2(s)
    expect(res).toBe('12AbC32')
  })
})

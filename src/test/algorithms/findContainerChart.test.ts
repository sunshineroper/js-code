import { findContainerChart1, findContainerChart2 } from '../../algorithms/findContainerChart'

describe('查找字符串中连续出现最多的字符和次数', () => {
  it('正常情况', () => {
    const str = 'ssss222ddffffff'
    let res = findContainerChart1(str)
    expect(res).toEqual({
      value: 'f',
      length: 6
    })
    res = findContainerChart2(str)
    expect(res).toEqual({
      value: 'f',
      length: 6
    })
  })
})

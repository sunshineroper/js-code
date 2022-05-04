import myQueue from '../chapter1/myQueue'

describe('两个栈模拟队列', () => {
  it('正常情况 add And Length', () => {
    const queue = new myQueue()
    queue.add(1)
    queue.add(2)
    queue.add(3)
    expect(queue.length).toBe(3)
  })
  it('delete', () => {
    const queue = new myQueue()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    
    const res = queue.delete()
    expect(res).toBe(100)
    expect(queue.length).toBe(2)
  })
})

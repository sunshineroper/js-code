// 栈 后进先出
// 队列 先进先出
export default class MyQueue {
  private stack1 :number[] = []
  private stack2 :number[] = []

  add (n: number) {
    this.stack1.push(n)
  }

  delete () :number | null {
    const stack1 = this.stack1
    const stack2 = this.stack2
    while(stack1.length) {
      const n = stack1.pop()
      if (n !== null) stack2.push(n)
    }

    const res = stack2.pop()

    while(stack2.length) {
      const n = stack2.pop()
      if (n !== null) stack1.push(n)
    }

    return res || null
  }

  get length () :number {
    return this.stack1.length
  }
}

export interface ILikedListNode {
  value: number,
  next?: ILikedListNode 
}
export function reverseLinkList (likedList :ILikedListNode) {
  let curNode: ILikedListNode | undefined = undefined
  let prevNode: ILikedListNode | undefined = undefined
  let nextNode: ILikedListNode | undefined = likedList

  while(nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next
    }
    // 反转
    if (curNode && prevNode) {
      curNode.next = prevNode
    }
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  curNode!.next = prevNode
  return curNode
}
export function createLikedList(arr :number[]) :ILikedListNode {
  const length = arr.length
  if (length === 0) throw new Error('arr must be an array');
  let curNode :ILikedListNode  = {
    value: arr[length - 1],
  }

  for(let i = length - 2; i >=0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    } 
  }

  return curNode
}

// 用链表实现一个队列
class MyQueue {
  private header :ILikedListNode | null
  private len :number = 0
  private tail :ILikedListNode | null

  add (n :number) {
    const curNode :ILikedListNode = {
      value: n,
      next: null
    }
    if (this.header === null) {
      this.header.next = curNode
    }

    const tailNode = this.tail
    if (tailNode) {
      tailNode.next = curNode
    }

    this.tail = curNode

    this.len++

  }

  delete () {
    const header = this.header
    if (header === null) return null
    if (length === 0) return null
    
    const value = header.value
    this.header = header.next
    this.len--
    return value
  }

  get length () {
    return this.len
  }
}

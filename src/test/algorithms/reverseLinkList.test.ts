import { createLikedList, reverseLinkList, ILikedListNode } from '../../algorithms/reverseLinkList'

describe('反转单向链表', () => {
  it('反转', () => {
    const node :ILikedListNode = createLikedList([100, 200, 300])
    //  { value: 100, next: { value: 200, next: { value: 300 } } }
    const node1 = reverseLinkList(node)
    expect(node1).toEqual({ value: 300, next: { value: 200, next: { value: 100 } } })
  })
})

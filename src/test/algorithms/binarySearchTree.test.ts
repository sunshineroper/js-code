import { tree, preOrderTraverse, inOrderTraverse, postOrderTraverse, getKthValue} from '../../algorithms/binarySearchTree'

describe('binarySearchTree', () => {
  it('前序遍历', () => {
    let arr: number[] = []
    preOrderTraverse(tree, arr)
    expect(arr).toEqual([5,3,2,4,7,6,8])
  })
  it('中序遍历', () => {
    let arr: number[] = []
    inOrderTraverse(tree,arr)
    expect(arr).toEqual([2,3,4,5,6,7,8])
  })
  it('后序遍历', () => {
    let arr: number[] = []
    postOrderTraverse(tree, arr)
    expect(arr).toEqual([2, 4, 3, 6, 8, 7, 5])
  })
  it('寻找BST中第K个最小值', () => {
    let arr: number[] = []
    let res = getKthValue(tree, 4, arr)
    expect(res).toBe(6)
  })
})

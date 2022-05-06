interface ITreeNode {
  value: number,
  left?: ITreeNode | null,
  right?: ITreeNode | null
}

export const tree: ITreeNode =  {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right : {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

// let arr: number[] = []

//  前序遍历
export function preOrderTraverse (node: ITreeNode | null, arr? :number[]) {
  if (node === null) return null
  arr.push(node.value)
  preOrderTraverse(node.left, arr)
  preOrderTraverse(node.right, arr)
}

// 中序遍历
export function inOrderTraverse (node: ITreeNode | null, arr :number[]) {
  if (node === null) return null
  inOrderTraverse(node.left, arr)
  arr.push(node.value)
  inOrderTraverse(node.right, arr)
}

// 后序遍历
export function postOrderTraverse (node: ITreeNode | null, arr :number[]) {
  if (node === null) return null
  postOrderTraverse(node.left, arr)
  postOrderTraverse(node.right, arr)
  arr.push(node.value)
}

// 寻找BST中第K个最小值

export function getKthValue (node: ITreeNode | null, k :number, arr: number[]) :number | null{
  inOrderTraverse(node, arr)
  return arr[k] || null
}

interface IRes {
  value: string
  length: number
}

export function findContainerChart1 (str :string) :IRes {
  let res: IRes = {
    value: '',
    length: 0
  }
  const length = str.length
  if (length === 0) return res
  let tempLength = 0
  for (let i = 0; i < length; i++) {
    tempLength = 0
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++
      }
      if (str[i] !== str[j] || j === length - 1) {
        if (tempLength > res.length) {
          res.value = str[i]
          res.length = tempLength
        }
        if (i < length - 1) {
          i = j
          i--
        }
        break
      }
    }
  }
  return res
}

export function findContainerChart2 (str :string) :IRes {
  let res: IRes = {
    value: '',
    length: 0
  }
  const length = str.length
  if (length === 0) return res

  let i = 0
  let j = 0
  let tempLength: number = 0

  for (; i < length; i++) {
    if (str[i] === str[j]) {
      tempLength++
    }

    if (str[i] !== str[j] || i === length - 1) {
      if (tempLength > res.length) {
        res.value = str[i]
        res.length = tempLength
      }
      tempLength = 0
      if (i < length - 1) {
        j = i
        i--
      }
    }
  }
  return res

}

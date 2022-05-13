export function switchLetterCase1 (s :string) : string {
  let res = ''
  const length = s.length

  if (length === 0) return res

  const s1 = /[a-z]/
  const s2 = /[A-Z]/

  for (let i = 0; i < length; i++) {
    const c = s[i]
    if (s1.test(c)) {
      res += c.toUpperCase()
    } else if (s2.test(c)) {
      res += c.toLowerCase()
    } else {
      res += c
    }
  }
  return res
}

export function switchLetterCase2 (s :string) : string {
  let res = ''
  const length = s.length

  if (length === 0) return res

  for (let i = 0; i < length; i++) {
    const c = s[i]
    const charCode = c.charCodeAt(0)
    if (charCode >=41 && charCode <= 90) {
      res += c.toLowerCase()
    } else if (charCode >= 61 && charCode <= 122) {
      res += c.toUpperCase()
    } else {
      res += c
    }
  }
  
  return res
}


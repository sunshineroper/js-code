export function fibonacci1 (n: number) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

export function fibonacci (n: number) {

  if (n <= 0) return 0
  if (n === 1 ) return 1

  let n1 = 1 // n - 1

  let n2 = 0 // n -2

  let res = 0

  for (let i = 2; i <= n; i++) {
    res = n1 + n2
    n2 = n1
    n1 = res
  }

  return res
}


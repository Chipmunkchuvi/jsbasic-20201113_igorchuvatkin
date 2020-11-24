/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1
  if (n == 0){
      return result = 1
  }

  for (let i = n; i > 0; i--){
      result *= i
  }
  return result
}

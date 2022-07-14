const largestPalindrome = () => {
  let ans = 0
  let string = ""
  let string2 = ""
  for (i = 999; i >= 100; i--) {
    for (j = 999; j >= 100; j--) {
      let num = i * j
      string = String(num)
      string2 = string.split("").reverse().join("")

      if (string == string2) {
        return num
      }
    }
  }

}

console.log(largestPalindrome())
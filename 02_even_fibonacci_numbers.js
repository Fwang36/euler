function evenFibonacci() {
  const fibArray = [1,2]

  let newNum = 3
  
  while (newNum < 4000000) {
    num1 = fibArray[fibArray.length - 1]
    num2 = fibArray[fibArray.length - 2]
    newNum = num1 + num2
    fibArray.push(newNum)
  }
  fibArray.pop()
  const oddRemoved = []
  for (let i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 == 0) {
      oddRemoved.push(fibArray[i])
    }
  }

  const initialValue = 0 
  const sum = oddRemoved.reduce((prev, cur) =>  prev + cur, initialValue)

  return sum
}

console.log(evenFibonacci())
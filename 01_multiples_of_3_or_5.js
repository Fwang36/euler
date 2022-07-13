function sumOfMultiples (num) {
  const multiples = []
  
  for (i = 1; i < num; i++) {
    if (i % 3 == 0) {
       multiples.push(i)
    }
  }
  for (i = 1; i < num; i++) {
    if (i % 5 == 0) {
      multiples.push(i)
    }
  }

  const removeDuplicateMultiples = [...new Set(multiples)]
  const initialValue = 0
  const sum = removeDuplicateMultiples.reduce((prev, cur) =>  prev + cur, initialValue
  )
  return sum
} 

console.log(sumOfMultiples(1000))
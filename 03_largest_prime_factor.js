
 function primeFactors(n) {

  const primeFactors = []
     while (n % 2 == 0)
     {
         n = Math.floor(n/2);
         primeFactors.push(n)
     }

     for (let i = 3; i <= n; i = i + 2)
     {
         while (n % i == 0)
         {
             n = Math.floor(n/i);
             primeFactors.push(i)
         }
     }
     return primeFactors[primeFactors.length - 1]
 }
  

  console.log(primeFactors(12312328));
  
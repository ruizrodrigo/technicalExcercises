function countSubarrays(numbers, k) {
    // Write your code here
  let subArrays = []      
  let laps = 1
  while(laps <= numbers.length) {
    let position = 0
    numbers.forEach(num => {
      if(position + laps <= numbers.length) {
        subArrays.push(numbers.slice(position, (position + laps)))
      position++
      }
    })
    laps++
  }
  
  let counter = 0
  subArrays.forEach(sub => {
    if(sub.length === 1) {
     if((sub[0] * 1) <= k) counter++
    } else {
      let position = 0
      let product = 0
      while(position < sub.length - 1){
        product === 0 ? product = (sub[position] * sub[(position+1)]) 
        :
        product = product * sub[position + 1]
        position ++
      }
      if (product <= k) counter++
    }
  })

  return counter
}
    
function miniMaxSum(arr) {
    // Write your code here
    let min = Infinity
    let max = -Infinity
    
    arr.forEach((num, i) => {
        let sum = 0
        arr.forEach((num2, i2) => {
            if(i !== i2) {
                sum += num2
            }
        })
        if(sum > max) max = sum
        if(sum < min) min = sum
    })
  console.log(min, max)
}

let array = [-5,-5,-5,-5,-5]
miniMaxSum(array)
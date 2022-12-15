function balancedSums(arr) {
    // Write your code here
    let iLeft = 0
    let iRight = arr.length - 1
    let sumLeft = arr.shift()
    let sumRight = arr.pop()
    while(arr.length > 1){
        if(sumLeft <= sumRight) {
            iLeft++
            sumLeft += arr.shift()
        } else {
            iRight--
            sumRight += arr.pop()
        }
    }
    if(!sumRight) return 'YES'
    if(sumLeft === sumRight) return 'YES'
    else return 'NO'
}


let arr = [0, 0, 2, 0]
let arr2 = [2, 0, 0, 0]
let arr3 = [1, 1, 4, 1, 1]

console.log(balancedSums(arr))
console.log(balancedSums(arr2))
console.log(balancedSums(arr3))
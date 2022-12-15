function twoArrays(k, A, B) {
    // Write your code here
    let counter = 0
    for(let i=0; i <= A.length; i++) {
        for(let j=i+1; j < B.length; j++) {
            let sum = A[i] + B[i]
            if(sum === k) break
            let sum2 = A[i] + B[j]
            if(sum2 >= k && sum2 < sum || sum < k) {
                let newValue = B[j]
                B[j] = B[i]
                B[i] = newValue    
            }    
        }
        if((B[i] + A[i]) >= k) counter++
    }
    console.log(counter)
    if(counter < A.length) return 'NO'
    else return 'YES'
}

let a4 = [3, 6, 8, 5, 9, 9, 4, 8, 4, 7]
let b4 = [5, 1, 0, 1, 6, 4, 1, 7, 4, 3]
let k4 = 9
let a5 = [4, 4, 3, 2, 1, 4, 4, 3, 2, 4]
let b5 = [2, 3, 0, 1, 1, 3, 1, 0, 0, 2]
let k5 = 4
console.log(twoArrays(k4,a4,b4))
console.log(twoArrays(k5,a5,b5))
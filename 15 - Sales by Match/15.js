function sockMerchant(n, ar) {
    // Write your code here
    let arr2 = [...ar]
    let counter = 0
    for(let i = 0; i < ar.length; i++){
        let consult = arr2.shift()
        for(let j=0; j < arr2.length; j++) {
            if(consult === undefined) break
            if(consult === arr2[j]) {
                arr2[j] = undefined
                counter++
                break
            }
            
        }
    }
    return counter
}

let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
console.log(sockMerchant(0, ar))
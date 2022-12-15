function plusMinus(arr) {
    // Write your code here
    let positives = 0
    let zeros = 0
    let negatives = 0
    arr.forEach(num => {
        num < 0 ?
            negatives++ :
                num > 0 ?
                    positives++ :
                        zeros++
    })
    console.log((positives / arr.length).toFixed(6))
    console.log((negatives / arr.length).toFixed(6))
    console.log((zeros / arr.length).toFixed(6))
} 


const arr = [1,1,0,-1,-1]

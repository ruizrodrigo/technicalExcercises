function flippingMatrix(matrix) {
    // NO TEMRMINADO
    // Write your code here
    let index = 0
    matrix.forEach((arr, i) => {
        if(matrix[index][i] < matrix[matrix.length -1][i]) {
            arr.forEach((e, index) => {
                let pivot = matrix[index][i]
                let pivot2 = matrix[index][i+1]
            })
        }
        if(arr[index] < arr[matrix.length -1]) arr.reverse()
    })
    let sum = 0
    matrix.forEach((arr,i) => {
        if(i >= (arr.length / 2)) return false
        arr.forEach((sub, i) => {
            if(i >= (arr.length / 2)) return false
            sum += sub
        })
    })
    return sum
}
/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here
    let unfairness = Infinity
    arr = arr.sort((a,b) => {return a-b})
    let q = k
    for(let i = 0; i < arr.length; i++){
        let select = arr.slice(i, k)
        if(select.length < q) break
        let unf = select[select.length - 1] - select[0]
        if(unf < unfairness) unfairness = unf
        k++
    }
    return unfairness
}


let arr = [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232]
let k = 5
let arr2 = [1,4,7,2]
let k2 = 2
let arr3 = [10, 100, 300, 200, 1000, 20, 30]
let k3 = 3

maxMin(k, arr)
maxMin(k2, arr2)
maxMin(k3, arr3)

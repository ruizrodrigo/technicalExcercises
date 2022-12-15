function diagonalDifference(arr) {
    // Write your code here
    let leftCounter = 0
    let rightCounter = 0
    let left = 0
    let right = arr[0].length - 1
    arr.forEach(arr2 => {
      leftCounter += arr2[left]
      rightCounter += arr2[right]
      left += 1
      right -= 1
    })
    return Math.abs((leftCounter - rightCounter))
}

let arr = [
  [11,2,4],
  [4,5,6],
  [10,8,-12]
]
//output  = 15

diagonalDifference(arr)
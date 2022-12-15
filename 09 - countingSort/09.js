function countingSort(arr) {
    // Write your code here
    let countingArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    arr.forEach(num => {
      countingArr[num] = countingArr[num] + 1
    })
  return countingArr
}


let arr = [1,1,1,3,4,5,2,2,3,4,4,5,6,7,9,9,9]
countingSort(arr)
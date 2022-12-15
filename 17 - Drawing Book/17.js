/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let book = []
    let left = 0
    let right = 1
    while(left <= n){
        book.push([left, right])
        left +=2
        right +=2
    }
    let counter = 0    
    if(p <= n/2) {
        for(let i = 0; i < book.length; i++) {
            if(book[i][0] === p || book[i][1] === p) break
            else counter++
        }
    } else {
        for(let i = book.length - 1; i > 0; i--) {
            if(book[i][0] === p || book[i][1] === p) break
            else counter++
        }
    }
    return counter
}
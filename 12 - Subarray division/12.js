function birthday(s, d, m) {
    // Write your code here
    let counter = 0
    s.forEach((num, i) => {
        let sum = 0
        s.slice(i, (m+i)).forEach(num => {sum += num})
        if(sum === d) counter ++
    })
    return counter
}

let s = [1, 2, 1, 3, 2]
let d = 3
let m = 2
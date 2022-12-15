function lonelyinteger(a) {
    // Write your code here
    let lonely = 0
    a.forEach(num => {
        let obtained = 0
        a.forEach(num2 => {
            if(num === num2) obtained++
        })
        if(obtained === 1) lonely = num
    })
    if(lonely === 0) return 'No hay ninguno que no se repita'
    return lonely
}

let a = [1,2,3,4,3,2,1,4,3,5,7,7,5]

lonelyinteger(a)    
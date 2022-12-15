function primeDates(fd, sd) {
    /*Complete primeDates function*/
    let months = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    let fdInt = fd.split('-').map(num => parseInt(num))
    let sdInt = sd.split('-').map(num => parseInt(num))
    let result = 0
    while (true) {
        let x = fdInt[0]
        x = x * 100 + fdInt[1]
        x = x * 10000 + fdInt[2]
        if(x % 4 === 0 || x % 7 === 0) result++
        if(fdInt[0] === sdInt[0] && fdInt[1] === sdInt[1] && fdInt[2] === sdInt[2]) break
        if(fdInt[2] % 4 === 0) {
            months[2] = 29
        } else {
            months[2] = 28
        }
        fdInt[0]++
        if(fdInt[0] > months[fdInt[1]]) {
            fdInt[1]++
            fdInt[0] = 1
            if(fdInt[1] > 12) {
                fdInt[2]++
                fdInt[1] = 1
            }
        }
    }
    return result
}
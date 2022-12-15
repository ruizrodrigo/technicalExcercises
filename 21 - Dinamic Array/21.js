function dynamicArray(n, queries) {
    // Write your code here
    let dimArray = []
    let answersArray = []
    while(dimArray.length < n) {
        dimArray.push([])
    }
    let lastAnswer = 0
    queries.forEach((sub, i) => {
        let idx = 0
        if(sub[0] === 1) {
            idx = (sub[1] ^ lastAnswer) % n
            dimArray[idx].push(sub[2])
        } else {
            idx = (sub[1] ^ lastAnswer) % n
            console.log(idx)
            lastAnswer = dimArray[idx][sub[2] % dimArray[idx].length]
            console.log(dimArray[idx][sub[2] % dimArray[idx].length])
            answersArray.push(lastAnswer)
        }
    });
    return answersArray
}

let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]
let queries2 = [
    [1, 345255357, 205970905],
    [1, 570256166, 75865401],
    [1, 94777800, 645102173],
    [1, 227496730, 16649450],
    [1, 82987157, 486734305],
    [1, 917920354, 757848208],
    [1, 61379773, 817694251],
    [1, 330547128, 112869154],
    [1, 328743001, 855677723],
    [1, 407951306, 669798718],
    [1, 21506172, 676980108],
    [1, 49911390, 342109400],
    [1, 980306253, 305632965],
    [2, 736380701, 402184046]
]
console.log(dynamicArray(14, queries2))
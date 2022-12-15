function gridChallenge(grid) {
    // Write your code here
    let alphGrid = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    grid.forEach((el) => {
        alphGrid = [...alphGrid, el.split('').sort((a, b) => a.localeCompare(b)).join('')]
    });
    let comparated = true
    let response = 'YES'
    alphGrid.forEach((el2, i) => {
        let compare = alphGrid[i+1]
        if(!comparated) {
            response = 'NO'
            return false;
        }
        if(compare === undefined) {
            response = 'YES'
            return true;
        }
        for (let j = 0; j < el2.length; j++) {
            if(alphabet.indexOf(el2[j]) > alphabet.indexOf(compare[j])) {
                comparated = false
            }
        }
    })
    return response
}

    let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
    let grid2 = ['mpxz', 'abcd', 'wlmf']
    
    console.log(gridChallenge(grid))
    console.log(gridChallenge(grid2))
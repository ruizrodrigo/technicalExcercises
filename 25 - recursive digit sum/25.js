function superDigit(n, k) {
    if(n.length === 1 && k === 1 ) return parseInt(n);
    
    let total = (n.split('').reduce((a, b) => parseInt(a) + parseInt(b))) * k;
    
    return superDigit(total.toString() , 1);
}


let x = '987544'
console.log(superDigit(x, 4))
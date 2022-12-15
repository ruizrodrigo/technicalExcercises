function flippingBits(n) {
    // Write your code here
    let bits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let counter = bits.length -1
    while(n >= 1) {
      bits[counter] = n%2
      counter--
      n = Math.floor(n/2)
    }
    
    let binary = bits.map(el => {
      if(el === 0) return 1
      if(el === 1) return 0
    }).join('')
    
    let decimal = 0
    for (let i = 0; i < binary.length; i++) {
      decimal += binary[i] * Math.pow(2, binary.length - 1 - i);
    } 
  
    return decimal
}


let n = 9
// es 1001

flippingBits(n)
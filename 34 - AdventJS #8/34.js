function countTime(leds) {
    let counter = 0

    if(!leds.some(el => el === 0)) {
        return counter 
    }
    for (let i = 0; i < leds.length; i++) {
        if(leds[i] === 0 && leds[i - 1] === 1) {
            leds[i] = 1
            i++
        }
        if(i === leds.length -1 && leds[0] === 0 && leds[leds.length - 1] === 1) {
            leds[0] = 1
        }
    }
    counter += 7

    return counter += countTime(leds)
  }



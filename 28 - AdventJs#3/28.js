function distributeGifts(packOfGifts, reindeers) {
    let packWeigth = packOfGifts.reduce((weigth, gift) => weigth + gift.length, 0)
    let reindeersWeigth = reindeers.reduce((weigth, reindeer) => weigth + (reindeer.length * 2), 0)
    return Math.floor(reindeersWeigth / packWeigth)
  }

// function distributeGifts(packOfGifts, reindeers) {
//     let packWeigth = 0
//     packOfGifts.forEach(gift => packWeigth += gift.length)
//     let reindeersWeigth = 0
//     reindeers.forEach(reindeer => reindeersWeigth += (reindeer.length * 2))
  
//     return Math.floor(reindeersWeigth / packWeigth)
//   }


// function distributeGifts(packOfGifts, reindeers) {
//     let packWeigth = 0
//     let reindeersWeigth = 0
//     let index = 0
//     while(index <= packOfGifts.length || index <= reindeers.length) {
//       if(packOfGifts[index]) packWeigth += packOfGifts[index].length
//       if(reindeers[index]) reindeersWeigth += (reindeers[index].length * 2)
//       index++
//     }
//     return Math.floor(reindeersWeigth / packWeigth)
//   }

console.log(distributeGifts(
    ['game', 'videoconsole', 'computer'], 
    ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
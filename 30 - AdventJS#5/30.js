function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let visited = []
  let giftSum = 0

  giftsCities.forEach((gift) => {
    giftSum = visited.reduce((a,b) => a+b, 0)
    if (gift > maxGifts) return false
    else {
        if(visited.length < maxCities) {
            if(giftSum + gift <= maxGifts) {
                  visited.push(gift)
                  giftSum += gift
              } else {
                  visited.forEach((num, i) => {
                      if(num < gift && (giftSum - num + gift <= maxGifts)) visited[i] = gift
                  })
              }
          } else {
              visited.forEach((num, i) => {
              if(num < gift && (giftSum - num + gift <= maxGifts)) visited[i] = gift
          })
      }
    }
  })
  if(visited.length === 1) return visited[0]
  return giftSum
}


getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30, 20, 10, 60, 80], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
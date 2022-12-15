function getGiftsToRefill(a1, a2, a3) {
    let refill = []
    let a1mod = [...new Set(a1)]
    let a2mod = [...new Set(a2)]
    let a3mod = [...new Set(a3)]
  
    for(let i = 0; i < a1mod.length; i++) {
      if(!a2mod.find(el => el === a1mod[i]) && !a3mod.find(el => el === a1mod[i])) {
        refill.push(a1mod[i])
      }
    }
  
    return refill
  }
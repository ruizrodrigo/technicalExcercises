function getGiftsToRefill(a1, a2, a3) {
    let refill = []
    let a1mod = [...new Set(a1)]
    let a2mod = [...new Set(a2)]
    let a3mod = [...new Set(a3)]
    let completeGifts = [...new Set([...a1mod, ...a2mod, ...a3mod])]
    
    for (let i = 0; i < completeGifts.length; i++) {
        let counter = 0
        if(!a1mod.find(el => el === completeGifts[i])) counter++
        if(!a2mod.find(el => el === completeGifts[i])) counter++
        if(!a3mod.find(el => el === completeGifts[i])) counter++
        if(counter === 2) refill.push(completeGifts[i])
    }
  
    return refill
  }

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1,a2,a3))
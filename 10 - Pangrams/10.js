
function pangrams(s) {
    // Write your code here
    let trimmed = s.replace(/ /g, "").toLowerCase()
    console.log(trimmed)
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let pangram = true
    abc.forEach(l => {
        if(!trimmed.includes(l)) pangram = false
    })
    if(pangram) return 'pangram'
    else return 'not pangram'
}

let ex1 = 'We promptly judged antique ivory buckles for the next prize'
let ex2 = 'We promptly judged antique ivory buckles for the prize'

pangrams(ex1)
pangrams(ex2)
function timeConversion(s) {
    // Write your code here
    let converted = s.slice(0, 8)
    let initial = s.slice(0,2)
    if(initial === '12' && s.charAt(8) === 'A') {
      converted = '00' + s.slice(2, 8) 
    }
    else if (s.charAt(8) === 'P') {
      if(initial !== '12') {
        let convertion = Number(initial) + 12
        converted = convertion + s.slice(2, 8)
      }
    }
  return converted
}

let s = '12:00:01PM'

timeConversion(s)





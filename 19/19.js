/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    if(k === 0) return s
    let orgAlph = 'abcdefghijklmnopqrstuvwxyz'
    if(k > orgAlph.length) {
        k = k % orgAlph.length
    }
    let alphRot = orgAlph.slice(k, orgAlph.length) + orgAlph.slice(0, k)
    let encoded = ''
    for (let i = 0; i < s.length; i++) {
        let index = orgAlph.indexOf(s[i].toLowerCase())
        if(index === -1) encoded += s[i]
        else {
            if(s[i] === orgAlph[index].toUpperCase()) {
                encoded += alphRot[index].toUpperCase()
            } else {
                encoded += alphRot[index] 
            }
        }
    }
    return encoded
}
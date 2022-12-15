function matchingStrings(strings, queries) {
    // Write your code here
    let results = []
    queries.forEach(q => {
        let counter = 0
        strings.forEach((s, i) => {
            if(s === q) counter++
        })
        results.push(counter)
    })
    return results
}

let strings = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

matchingStrings(strings, queries)
function checkPart(part) {
    let solution = false
    let part2 = part.split("")

    for (let i = 0; i < part.length; i++) {
        let reversed = part.split("").reverse().join("")
        if (reversed === part) {
            solution = true;
            break;
        } else {
            part2.splice(i, 1)
            if(part2.join("") === part2.reverse().join("")) {
                solution = true;
                break;
            } else {
                part2 = part.split("")
            }
        }

    }
    return solution
  }
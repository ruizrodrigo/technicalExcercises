function createCube(size) {
    let face = "/\\"
    let reverseFace = "\\/"
    let side = "_\\"
    let reverseSide = "_/"
    let space = " "
    let lap = 0
    let cube = ''

    if(size === 1) return face + side + "\n" + reverseFace + reverseSide
    while(lap < size * 2) {
        if(lap < size) {
            cube += space.repeat(size - lap - 1) + face.repeat(lap + 1) + side.repeat(size) + "\n"
        } else {
            cube += space.repeat(lap - size) + reverseFace.repeat(size*2 - lap) + reverseSide.repeat(size)
            if(lap !== (size*2 - 1)) cube += "\n"
        }
        lap++
    }
    return cube
  }


console.log(createCube(7))
function fitsInOneBox(boxes) {
    for(let i = 0; i < boxes.length - 1; i++){
        if(boxes[i]['l'] > boxes[i + 1]['l'] && boxes[i]['w'] > boxes[i + 1]['w'] && boxes[i]['h'] > boxes[i + 1]['h']) {
            let aux = boxes[i]
            boxes[i] = boxes[i + 1]
            boxes[i + 1] = aux
        }
    }
    let counter = 0
    for(let i = 0; i < boxes.length - 1; i++){
        if(boxes[i]['l'] < boxes[i + 1]['l'] && boxes[i]['w'] < boxes[i + 1]['w'] && boxes[i]['h'] < boxes[i + 1]['h']) {
            counter ++
        }
    }
    if(counter === boxes.length - 1) return true
    else return false    
  }
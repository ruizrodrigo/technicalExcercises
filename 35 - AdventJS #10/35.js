function checkJump(heights) {
    let max = heights.indexOf(Math.max(...heights))
    let response = true
    if(max === heights.length - 1 || max === 0) return false
    for(let i = 0; i < heights.length; i++) {
      if(i !== 0) {
          if(i < max) {
            if(heights[i] >= heights[i - 1]) response = true
            else {
                response = false
                break
            }
          }
          if(i > max) {
            if(heights[i] <= heights[i - 1]) response = true
            else {
              response = false
              break
            }
          }
      }  
    }
    return response
  }
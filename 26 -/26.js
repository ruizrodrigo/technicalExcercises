function countHours(year, holidays) {
    let counter = 0
    holidays.forEach(day => {
      let date = day.split('/')
      console.log(date)
      let completeDate = new Date(year, date[0] - 1, date[1])
      console.log(completeDate)
      let dayWeek = completeDate.getDay()
      console.log(dayWeek)
      if(dayWeek !== 0 && dayWeek !== 6) counter++
  
    })
    return counter * 2
  }
  

  console.log(countHours(2023, ['01/06', '04/01', '12/25']))
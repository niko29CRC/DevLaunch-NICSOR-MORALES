const prompt = require('prompt-sync')();

const EXTRA_HOUR_MULTIPLIER = 1.5
const MIN_LABOR_HOURS = 8

const calculateSalary = (hourlyRate, startTime, endTime) => {
    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')
    
    const workedHours = endHour - startHour
    let salary = workedHours * hourlyRate

    if (workedHours > MIN_LABOR_HOURS) {
      const extraHours =  workedHours - MIN_LABOR_HOURS
      salary = (MIN_LABOR_HOURS * hourlyRate) + (extraHours * hourlyRate * EXTRA_HOUR_MULTIPLIER)
    }
         
    console.log("-----------------")
    console.log("Worked Hours: ", workedHours)

    return salary
}

const main = () => {
    
   const hourlyRate = parseFloat(prompt("Hourly Rate: "))
   const startTime = prompt("Start AT: ")
   const endTime = prompt("Ends AT: ")
   
   const salary = calculateSalary(hourlyRate, startTime, endTime) 

   console.log('TOTAL SALARY => $ ', salary)
}

main()
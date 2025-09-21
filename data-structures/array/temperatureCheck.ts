/*
-------------------------------------
|  id  |     date    |  temperature |
|   1  |  2024-01-01 |       15     |
|   2  |  2024-01-02 |       20     |
|   3  |  2024-01-03 |       18     |
|   4  |  2024-01-04 |       25     |
-------------------------------------
*/

class TemperatureHistory {
    
    public id: number
    public date: Date
    public temperature: number

    constructor(id: number, date: Date, temperature: number) {
      this.id = id
      this.date = date
      this.temperature = temperature
    }

}

function findHigherTemperature(temperatureArray: TemperatureHistory[]) {
    let maxTemperatureArray: number[] = []
    
    for (let i=1; i < temperatureArray.length; i++) {
       if(temperatureArray[i].temperature > temperatureArray[i-1].temperature) {
          maxTemperatureArray.push(temperatureArray[i].id)  
       }
    }

    return maxTemperatureArray
}

const temperatureArray = [
new TemperatureHistory(1, new Date('2024-01-01'), 15),
new TemperatureHistory(2, new Date('2024-01-02'), 20),
new TemperatureHistory(3, new Date('2024-01-03'), 18),
new TemperatureHistory(4, new Date('2024-01-04'), 25) 
]

const higherTemperature: number[] = findHigherTemperature(temperatureArray)

if(higherTemperature.length > 0) {
    console.log('|  ID |')
    console.log('-------')
     for (let i=0; i < higherTemperature.length; i++) {
       
       console.log('| ',  higherTemperature[i], ' |')  
       
    }
}

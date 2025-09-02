/* DIFERENTES VEHICULOS: emoji, marca, modelo y año de fabricación*/

class Vehicle {

    private isON: boolean
    constructor(
       protected emoji: string,
       protected brand: string,
       protected model: string,
       protected year: number
    ){
       this.emoji = emoji
       this.brand = brand
       this.model = model
       this.year = year
       this.isON = false
    }
    
    run(){
      this.isON = true
    }

    toString () {
       return `Emoji: ${this.emoji} \nBrand: ${this.brand} \nModel: ${this.model} \nYear: ${this.year}`
    }
}

class Car extends Vehicle {
   private isAirConditionedOn: boolean

    constructor(
       brand: string,
       model: string,
       year: number,
       private numOfDoors: number = 4
    )  {
        super('🚗', brand, model, year)
        this.isAirConditionedOn = false
    }

    print(): string {
        const info = this.toString()

        return `${info}\nNum Doors: ${this.numOfDoors}`
    }
}

class Motorcycle extends Vehicle {
    
    constructor(
       brand: string,
       model: string,
       year: number
    )  {
        super('🏍️', brand, model, year)
    }

    wheelie() : string {
      return `🏍️𖦹`
    }
}

const car1 = new Car('Toyota', 'Corolla', 1998)
const mt1 = new Motorcycle('Yamaha', 'Super', 2005)
console.log(car1.toString())
console.log(mt1.toString())
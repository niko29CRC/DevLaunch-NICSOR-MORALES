
type DogColor = 'black'|'white'

// Function object No. 1
function createDog(name: string, age: number, color: DogColor){
    return {
        name,
        age, 
        color
    }
}

const d1 = createDog('Oreo', 4, 'black')
const d2 = createDog('Zipy', 2, 'white')


// Plain object create No. 2
function Dog (name: string, age: number, color: DogColor) {
  this.name = name
  this.age = age
  this.color = color

  return this
}


// @ts-ignore
const d3 = new Dog('Oreo', 4, 'black')

class BabyDog {
    public name : string
    public color : DogColor
    private age : number

    constructor (n: string, pAge: number, pColor: DogColor){
        this.name = n
        this.color = pColor
        this.age = pAge
    }

    public bark = () : void => {
      console.log("Guau guauuuu !!! ")
      this.breath()
    }

    private breath = () : void => {
      console.log("buuuff !!")
    }
}

// Object instance
const bd1 = new BabyDog('Rocky', 4, 'black')
const bd2 = new BabyDog('Tingo', 2, 'white')
bd1.bark()
/*CLASE ANIMAL CON SUS ATRIBUTOS Y HEREDE PROPIEDADES A OTROS COMO LEÓN, ELEFANTE, ETC.*/


class Animal {
    constructor(
        protected name: string,
        protected specie: string,
        protected age: number
    ) {
        this.name = name
        this.specie = specie
        this.age = age
    }

    makeSound()
    {

    }

    // Mostrar todas las propiedades en una cadena
    toString() {
       return `Name: ${this.name} \nSpecie: ${this.specie} \nAge: ${this.age}`
    }
}

class Lion extends Animal {
    constructor(name: string, 
                specie: string, 
                age:number) 
    {
       super(name, specie, age)
    }

    makeSound(): string {
        return 'ROOOOARRR ....'
    }

    print(): string {
        const info = this.toString()

        return `🦁:\n${info}`
    }
}

type ElephantSize = 'small' | 'medium' | 'large'

class Elephant extends Animal {
     constructor(name: string, 
                 specie: string, 
                 age: number,
                 private size: ElephantSize) 
    {
       super(name, specie, age)
    }

    makeSound() : string {
       return 'PPPPHHRRRR....' 
    }

     print(): string {
        const info = this.toString()

        return `🐘:\n${info}\nSize: ${this.size}`
    }
}

const l1 = new Lion('Simba', 'Brown', 6)
console.log(l1.makeSound())
console.log(l1.print())

const el1 = new Elephant('Larry', 'Gray', 10, 'medium')
console.log(el1.makeSound())
console.log(el1.print())
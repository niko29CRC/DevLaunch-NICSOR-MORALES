const name = 'Oreo'
const age = 3
const color = 'black'

// Definición de objeto
// key: value, key2: value2, 
const dog = {
    name: 'Oreo',
    age: 3,
    color: 'black',

    // Métodos - acciones 
    bark: () => {
      return 'GUAUU GUAAAUU !!!'
    }
}

// Función que retorna objeto
function getDog(){

    return {
         name: 'Chofis',
         age: 2,
         color: 'light-brown',
    }
}
console.log(dog)
console.log('Dog age: ', dog.age)
console.log('Bark: ', dog.bark())
console.log(getDog())

// Instancia de objeto
const cat = new Object()
cat.name = 'Kitty'
cat.age = 1
cat.color = 'white'

console.log(cat)
cat.age = 2
console.log(cat['age']);

/* JSON: Javascript Object Notation
     Formato de datos ligero que se utiliza comúnmente para intercambiar datos entre sistemas y apps

    {"name": "Anthony" age: "34"  height: "1.85"}

    console.log(JSON.parse)
*/

const jsonObject = '{ "name": "Anthony", "age": 9 }'

console.log(JSON.parse(jsonObject))

// Clonar un objeto

const person = {name: 'Anthony', age: 27}

const cloneObj = {...person}

console.log('Clone', cloneObj)

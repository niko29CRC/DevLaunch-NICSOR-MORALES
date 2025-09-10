// Ejemplo de transporte objetos de Austria a los Alpes Franceses 
function austria(){
    const train: string [] = ['🚪', '🧱', '🪟']

    switzerland(train)
}

function switzerland(train: string[]){
   train.push('🌳')
   train.push('🪵')
   frenchAlps(train)
}

function frenchAlps(train: string[]){
    console.log('French Alps: ', train)
}

// Mostrar trayecto hasta french Alps
austria()

// Ejemplo Array []
const materials = []
materials.push('🚪')
materials.push('🌳')
materials.push('🪟')

console.log('Con push: ', materials)

// Con valores por defecto
const defaultMaterials: string []  = ['🌳', '🪵']
console.log('Default Materials ➡️ ', defaultMaterials)
console.log('Length: ', defaultMaterials.length)

// Array como objeto
const newArray = new Array(5)

newArray[0] = '🪟'
newArray[1] = '🌳'
newArray[2] = '🧱'

console.log('Arreglo con tam fijo: ', newArray)
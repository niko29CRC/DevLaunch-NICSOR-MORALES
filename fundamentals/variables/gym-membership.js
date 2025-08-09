/* 
    El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California.
    que ofrece membresías por $150 al mes.
    Opera de 6am a 10pm, emplea a 10 entrenadores certificados
    y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = "Elite Fitness Center"
const gymClass = "Boutique"

const cityAddress = "Palo Alto"
const stateAddress = "California" 
const location = `${cityAddress}, ${stateAddress}`

const membershipPrice = 150
const currencySymbol = "$"

const openingHour = "06" 
const openingMinute = "00"
const openingTime = `${openingHour}:${openingMinute}`

const closureHour = "22" 
const closureMinute = "00"
const closureTime = `${closureHour}:${closureMinute}`

const certificatedTrainersNumber = 10

const serviceSauna = "Sauna"
const servicePool = "Piscina"
const serviceGrupalClass = "Clases grupales"
const amenities = `${serviceSauna},${servicePool},${serviceGrupalClass}`

console.log(`
     Gym Name: ${gymName} \n
     Gym Class: ${gymClass} \n
     Location: ${location} \n
     Membership cost: ${currencySymbol} ${membershipPrice} \n
     Working hours: ${openingTime} to ${closureTime} \n
     Available Certificated Trainers: ${certificatedTrainersNumber} \n
     Amenities: ${amenities}
`)
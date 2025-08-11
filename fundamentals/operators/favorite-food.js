const prompt = require('prompt-sync')();

const favoriteFoodMaria = prompt("Maria's favorite food => ")
const favoriteFoodPepe = prompt("Pepe's favorite food => ")
const favoriteFoodMalvern = prompt("Malvern's favorite food => ")

const isMariaAndPepeSameFavFood = favoriteFoodMaria === favoriteFoodPepe
const isMariaAndMalvernSameFavFood = favoriteFoodMaria === favoriteFoodMalvern

const allMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood

console.log(`
    Does Maria share the same favorite food as both Pepe and Malvern?: ${allMatch}
    Does Maria's favorite food match either Pepe's or Malvern's?  ${someMatch}
    Does Maria's preference differ from both Pepe's and Malvern's? ${noMatch}
`)
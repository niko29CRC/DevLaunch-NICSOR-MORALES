/*
   Calcule el índice de masa corporal de una persona, capturando el nombre de la persona. su peso en kg y 
   su estatura en metros.

   La fórmula es IMC = weight / (height ^ 2)

*/

const prompt = require('prompt-sync')();

const personName = prompt("Your name, please => ")
const weight = parseFloat(prompt("Weight (kg) => "))
const height = parseFloat(prompt("Height (m) => "))
const bmiIndex = weight / (height * height)

console.log(`
   ${personName}, your BMI index is ${bmiIndex.toFixed(2)} 
`)



/* El programa solicita la edad del usuario, utilizando el ternary condition evaluar las siguientes condiciones
   0-2 yrs: You're a baby
   3-13 yrs: You're a child
   14-17 yrs: You're a teenager
   18-29 yrs: You're a young adult
   30-60 yrs: You're an adult
   +60 yrs: You're an elderly

   Si la edad es menor a cero. mostrar mensaje: "Your institution doesn't support your age. Try again"
   */

const prompt = require('prompt-sync')();
const age = parseInt(prompt("Write your age => "))

// Ternary example
const finalMessage = (age >= 0 && age <= 2) ? 'You are a baby'
  :(age >= 3 && age <= 13) ? 'You are a child'
  :(age >= 14 && age <= 17) ? 'You are a teenager'
  :(age >= 18 && age <= 29) ? 'You are a young adult'
  :(age >= 30 && age <= 60) ? 'You are an adult'
  :(age > 60) ? 'You are an elderly' : 'Your institution does not support your age. Try again'

console.log(finalMessage)

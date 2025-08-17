/*Escribe un programa que evalúe si un número es positivo, negativo o cero. Muestre un mensaje
correspondiente a la condición cumplida.
  Si la variable no es número, indicar Mensaje: "Por favor, introduce un número."
  */

const prompt = require('prompt-sync')();
const inputNumber = parseFloat(prompt("Digite un número => "))

function isValidNumber(pInput) {
  return typeof pInput === 'number' && Number.isFinite(pInput);
}


if (isValidNumber(inputNumber)) {
    if (inputNumber > 0 ){
        console.log("Positivo")
    } else if(inputNumber < 0) {
        console.log("Negativo")
    } else {
        console.log("Cero")
    }
} else {
   console.log("Por favor, introduce un número")
} 


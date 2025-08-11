/*  
    Escribe un programa Javascript que solicite al usuario ingresar el número de días
    y calcule el número equivalente en meses y días restantes, bajo la condición
    que un mes consta de 30 días.

    El programa muestra un mensaje al usuario los meses y días.

    Como pista, puede usar la función Math.floor() para redondear el resultado

*/
const prompt = require('prompt-sync')();

const DAYS_PER_MONTH = 30

const totalDays = parseInt(prompt("Number of the days => "))
const monthsAmount = parseInt(totalDays / DAYS_PER_MONTH)
const remainingDays = totalDays % DAYS_PER_MONTH

console.log(`
    ${totalDays} days are ${monthsAmount} month(s) and ${remainingDays} day(s)
`)



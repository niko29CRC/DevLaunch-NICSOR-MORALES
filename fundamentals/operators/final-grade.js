/*
  Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes 
  de una escuela. Como parte de este desafío, primero configuras el entorno para recibir
  entradas del usuario, permitiendo que ingresen tres notas.

  Luego, procesas estos datos para calcular el promedio de manera precisa

  Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una 
  lectura clara.

*/

const prompt = require('prompt-sync')();
let   gradesRead = 0
const firstGrade = parseFloat(prompt("First grade => "))
gradesRead++
const secondGrade = parseFloat(prompt("Second grade => "))
gradesRead++
const thirdGrade = parseFloat(prompt("Third grade => "))
gradesRead++

const average = (firstGrade + secondGrade + thirdGrade) / gradesRead

console.log(`
    ----------------
    STUDENT REPORT
    ----------------\n
     First:   ${firstGrade} 
     Second:  ${secondGrade} 
     Third:   ${thirdGrade}\n
     FINAL AVERAGE = ${average.toFixed(2)}
`)


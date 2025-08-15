/* Ingrese un número entre 1 al 7 y mostrar el día de la semana que corresponde (1:Monday 2: Tuesday...)
   Si la variable no es un número, imprime un mensaje de error "Por favor introduce un número válido"*/

const prompt = require('prompt-sync')();
const dayNumber = parseFloat(prompt("Digite un número del 1-7 => "))

switch (dayNumber) {
   case 1:
     console.log("Monday");
     break;
   case 2:
     console.log("Tuesday");
     break;
   case 3:
     console.log("Wednesday");
     break;
   case 4:
     console.log("Thursday");
     break;
   case 5:
     console.log("Friday");
     break;
   case 6:
     console.log("Saturday");
     break;
   case 7:
     console.log("Sunday");
     break;  
   default:
     console.log("Invalid number");
     break;
}
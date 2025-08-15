/* Desarrolle un programa que calcule la edad de una persona, capturando la fecha de nacimiento en formato YYYY/MM/DD

   En el bar de Moe, si la persona tiene 18 años o más tiene la edad permitida para ingerir bebidas alcohólicas.
   
   const birthdate = prompt('What is your birthdate in format YYYY/MM/DD ?') 
   
   const birthday = new Date(birthdate)
   const today = new Date

   const age = today.getFullYear() - birthday.getFullYear() // Takes the age from the person.
   */ 

   const prompt = require('prompt-sync')();
   const birthdate = prompt('What is your birthdate in format YYYY/MM/DD ?  ') 
   
   const birthday = new Date(birthdate)
   const today = new Date ()

   const fullBirthday = parseInt(String(birthday.getMonth() + 1).padStart(2, '0') + String(birthday.getDate()).padStart(2, '0'))
   const fullToday    = parseInt(String(today.getMonth() + 1).padStart(2, '0') + String(today.getDate()).padStart(2, '0'))
   let age = today.getFullYear() - birthday.getFullYear() // Takes the age from the person.
    
   //console.log(fullBirthday)
   //console.log(fullToday)

   if (fullToday < fullBirthday) {
     age--
   }

   console.log(`Your age = ${age}`)

   if (age >= 18) {
      console.log("Welcome to Moes Bar.")
   } else {
      console.log("Age isn't allowed to enter Moes Bar.")
   }
   
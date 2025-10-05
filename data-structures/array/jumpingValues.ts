/* Saltar cierta cantidad de espacios dependiendo el valor actual del arreglo, iniciando desde la posición inicial,
   Si puedo llegar hasta el último elemento sin pasarme, devuelve true, de lo contrario false.

   Por ejemplo:

   Input: nums[2, 3, 1, 1, 8] 
   Output: true
   Way: First 2 spaces, then 1 space, 1 space and finally has arrived last element

   Input: nums[2, 3, 1, 2, 4]}
   Output: false
   Way: First 2 spaces, then 1 space, then 2 space but you're out of bounds 1 space. 
*/
import promptSync from 'prompt-sync'
const prompt = promptSync()

function isJumpingArray(array: number[]): boolean {
    
    let i = 0
    let result: boolean = true
    const LENGTH: number = array.length


    do {  

      if ((i >= LENGTH)) {
        result = false
        break
      }

      i += array[i]
     
      
    } while((i != (LENGTH - 1)))
       
    return result
}


const arrayOne: number [] = [2, 3, 1, 1, 10] 
const arrayTwo: number [] = [2, 3, 1, 2, 12]


console.log(arrayOne, ':', isJumpingArray(arrayOne))
console.log(arrayTwo, ':', isJumpingArray(arrayTwo))
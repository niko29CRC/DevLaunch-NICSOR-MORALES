// camino del gusano 

import promptSync from 'prompt-sync';
const prompt = promptSync();


const step: string = '*';
const matrixPath: string [][] = [['', '', ''], ['', '', ''], ['', '', '']];


function printMatrix(matrix:string[][]) : boolean {
   const space: string = ' '
   let isCompleted: boolean = true
    
   for(let i = 0; i < matrix.length; i++) {
      let row: string = '';
      for(let j = 0; j < matrix.length; j++) {
         if (matrix[i][j] !== step) {
           isCompleted = false
         }
         row += matrix[i][j] || space;
      }

      console.log(row);
   }
    
   return isCompleted;
}

function snailWalkFiller(matrix:string[][]) {
   type Direction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN';
   let move: Direction
   let isIncomplete: boolean = false;

   let i: number = 0;
   let j: number = 0;
   move = 'RIGHT'

   do {
           
      console.log('i=', i, 'j=', j)

      if (i < matrix.length && j < matrix.length) {
         if(matrix[i][j] !== step) {
            matrix[i][j] = step
         }   
      }

      switch (move) {
        case 'RIGHT': {
         if ( (j + 1) == matrix.length) {
           move = 'DOWN'
           i += 1
         } else {
           j += 1 
         }
         break;
       } 

        case 'DOWN': {
          if ( (i + 1) == matrix.length) {
           move = 'LEFT'
           j -= 1
         } else {
           i += 1 
         }
         break;
        }

        case 'LEFT': {
          if ( (j - 1) == -1) {
           move = 'UP'
           i -= 1
         } else {
           j -= 1 
         }
         break;
        }

        case 'UP': {
          if ( (i - 1) == -1) {
           move = 'RIGHT'
           j += 1
         } else {
           if(matrix[i-1][j] = step) {
             move = 'RIGHT'
             j += 1
           } else {
             i -= 1 
           }
         }
         break;
        }

        default: 
           isIncomplete = true
           break;
      }

      isIncomplete = printMatrix(matrix);
      const result = prompt(' ');
   }while (!isIncomplete);

}

snailWalkFiller(matrixPath);
console.log('COMPLETED !!!')


function getMaxConsecutiveIterative(pArray: number[], pValue: number) : number {
   let currentCount: number = 0
   let maxCount: number = 0

   for(let i=0; i < pArray.length; i++) {
      
      if(pArray[i] == pValue) {
        currentCount++
      }else{
        currentCount = 0
      }
      maxCount = Math.max(maxCount, currentCount)
   }
   
   return maxCount

}

const binaryArray: number[] = [0,0,1,1,1,1,0,1]
const value: number = 1

console.log('Number of consecutive ', value, 's from ', binaryArray, '=',  getMaxConsecutiveIterative(binaryArray, value))
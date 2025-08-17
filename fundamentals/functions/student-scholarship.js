const prompt = require('prompt-sync')();
const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MINIMUM_GRADE = 8
const FAST_FORWARD_AVERAGE = 9
const INTERMEDIATE_AVERAGE = 8.5

function validateScholarship(grade1, grade2, grade3, grade4, assistantGrade){
   
    if (assistantGrade === REJECT_ASSISTANT_GRADE)  {
        return false
    }

    if (grade1 < MINIMUM_GRADE || grade2 < MINIMUM_GRADE || grade3 < MINIMUM_GRADE || grade4 < MINIMUM_GRADE) {
        return false
    }

    const average = (grade1 + grade2 + grade3 + grade4) / AMOUNT_OF_GRADES
    
    console.log(`Average ${average}`)

    if (average >= FAST_FORWARD_AVERAGE) {
        return true
    } else {
        if ( (average >= INTERMEDIATE_AVERAGE) && (assistantGrade != 'C' ) ) {
           return true  
        }
        else {
           return false
        }
    }

}
 
function main(){
    
    const grade1 = parseFloat(prompt('Grade No. 1 => '))
    const grade2 = parseFloat(prompt('Grade No. 2 => '))
    const grade3 = parseFloat(prompt('Grade No. 3 => '))
    const grade4 = parseFloat(prompt('Grade No. 4 => '))
    
    const assistantGrade = prompt('Assistant Grade (A, B, C) => ')
    const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)

    console.log(grade1, grade2, grade3, grade4, assistantGrade)

    if (isEligible) {
        console.log('Congrats!!! You are eligible for getting a scholarship')
    } 
    else {
        console.log('Sorry. You are not eligible for getting a scholarship')
    }
}

main()
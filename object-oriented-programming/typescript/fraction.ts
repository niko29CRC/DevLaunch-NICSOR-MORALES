interface Fraction {
   numerator: number,
   denominator: number
}

// Tipado de parámetros
type FractionParamOperation = (f2: Fraction) => Fraction

interface FractionWithOperations extends Fraction {
   add: FractionParamOperation
   substract: FractionParamOperation
   multiply: FractionParamOperation
   divide: FractionParamOperation
}
const createFraction = (numerator: number, denominator: number) : Fraction => {
   return {
      numerator,
      denominator
   }
}

const add = (f1: Fraction, f2: Fraction) => {
   const numerator = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator)
   const denominator = f1.denominator * f2.denominator
   
   return createFraction(numerator, denominator)
}

const substract = (f1: Fraction, f2: Fraction) => {
   const numerator = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator)
   const denominator = f1.denominator * f2.denominator
   
   return createFraction(numerator, denominator)
}

const multiply = (f1: Fraction, f2: Fraction) => {
   const numerator = f1.numerator * f2.numerator
   const denominator = f1.denominator * f2.denominator
   
   return createFraction(numerator, denominator)
}

const divide = (f1: Fraction, f2: Fraction) => {
   const numerator = (f1.numerator * f2.denominator) 
   const denominator = (f2.numerator * f1.denominator)
   
   return createFraction(numerator, denominator)
}
const fraction1 = createFraction(3,5)
const fraction2 = createFraction(2,8)
console.log('F1: ', fraction1)
console.log('F2: ', fraction2)

console.log('Suma: ', add(fraction1, fraction2)) 
console.log('Resta: ', substract(fraction1, fraction2) )
console.log('Multip: ', multiply(fraction1, fraction2) )
console.log('Div: ', divide(fraction1, fraction2) )

// CreateFractionWithFunctions

const createFractionsWithFunctions = (numerator: number, denominator: number): FractionWithOperations => {
    const f1 = createFraction(numerator, denominator)

    return {
       ...f1,
       add: (f2: Fraction) => add(f1, f2),
       substract: (f2 : Fraction) => substract(f1, f2),
       multiply: (f2 : Fraction) => multiply(f1, f2),
       divide: (f2 : Fraction) => divide(f1, f2),
    }
}

const f3 = createFractionsWithFunctions(3,4)
const f4 = createFractionsWithFunctions(2,3)

console.log('********')
console.log('F3: ', f3)
console.log('F4: ', f4)

console.log('** Add: ', f3.add(f4))
console.log('** Subst: ', f3.substract(f4))
console.log('** Multiply: ', f3.multiply(f4))
console.log('** Divide: ', f3.divide(f4))
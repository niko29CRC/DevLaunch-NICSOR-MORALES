// Triángulo y teorema de desigualdad (suma de los dos lados es mayor al tercero)

interface Triangle {
   a: number,
   b: number,
   c: number
}

const t1: Triangle = {
    a: 7,
    b: 10,
    c: 5
}

const t2: Triangle = {
    a: 2,
    b: 3,
    c: 6
}

// Function object
// *** Destructurar el objeto / parámetro {a, b, c} : Triangle

const isValidTriangle = ({a, b, c} : Triangle) => {
  return (b + c) > a && (a + b) > c && (a + c) > b
}

console.log('Result t1: ', isValidTriangle(t1))
console.log('Result t2: ', isValidTriangle(t2))

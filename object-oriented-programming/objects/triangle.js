// Triángulo y teorema de desigualdad (suma de los dos lados es mayor al tercero)

const t1 = {
    a: 7,
    b: 10,
    c: 5
}

const t2 = {
    a: 2,
    b: 3,
    c: 6
}
// Function object
const isValidTriangle = (triangle) => {
  const {a, b, c} = triangle
   
  return (b + c) > a && (a + b) > c && (a + c) > b
}

console.log('Result t1: ', isValidTriangle(t1))
console.log('Result t2: ', isValidTriangle(t2))

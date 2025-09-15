interface Receipt {
    name: string
    amount: number
    taxes: number
    total: number
}

const receipts: Receipt [] = [
   {name: 'RES IT-01', amount: 8, taxes: 2.5, total: 100}, 
   {name: 'IT-02', amount: 4, taxes: 4.5, total: 120},
   {name: 'RES IT-03', amount: 5, taxes: 5, total: 150},
   {name: 'RES IT-04', amount: 3, taxes: 3, total: 115},
   {name: 'IT-05', amount: 1, taxes: 0, total: 200},
   {name: 'IT-06', amount: 1, taxes: 0, total: 60},
]

const incomes: number [] = [
    3000, 300, 1200
]

let totalIncome = 0
for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i]
}

console.log('Total income= ', totalIncome)

/* ForEach Iteración
   forEach((primero) => {Código})
  (primero) = variable que acumula 

*/

let totalExpenses = 0

receipts.forEach((receipt) => {
  totalExpenses += receipt.total
})

console.log('Expenses=', totalExpenses)

// Find: encontrar elementos en un array bajo una condición (se detiene al encontrar un elemento)
const expensiveReceipt = receipts.find( comp => {
    return comp.total === 200
})

// Aparece el signo de pregunta para manejar el error por valor undefined
console.log('Expensive Receipt is: ', expensiveReceipt?.total)

// Filter: encontrar varios elementos en un array con una condición
const restaurantReceipts = receipts.filter(receipt => {
    return receipt.name.includes('RES')
})

console.log(restaurantReceipts)

// Filter: encontrar varios elementos en un array con una condición
const restaurantReceiptsTotal = receipts.filter(receipt => {
    return receipt.name.includes('RES')
})

let totalSum = 0
restaurantReceiptsTotal.forEach(receipt => totalSum += receipt.total)
console.log('RESTAURANT TOTAL AMOUNT= ', totalSum)

// MAP: retorna un array con un formato diferente

const newTotalExpensesArray = receipts.map(({total}) => ({total}))
console.log('NEW TOTAL=', newTotalExpensesArray)

const percentArray = receipts.map(percReceipt => ({
    ...percReceipt, percentage: ((percReceipt.total / totalIncome) * 100).toFixed(2)
}))

console.log(percentArray)

// REDUCE: reducir un array expresión a conveniencia 

const filterByTotal = receipts.reduce((filter, receipt) => {
   if (receipt.total > 118) {
     filter.push(receipt)
   }

   return filter
}, [] as Receipt[])

const totalExpenses2 = receipts.reduce((acumulatetotal, receipt) => acumulatetotal + receipt.total, 0)
console.log('TOTAL EXPENSES 2= ', totalExpenses2)
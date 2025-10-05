

function calculateGasTotalCost(pGas: number[], pCost: number[], pInitialPos: number) 
{
    let p: number = pInitialPos
    let i: number = p + 1
    let tank: number = 0 + pGas[p]

    if (pInitialPos >= pGas.length) {
       return -1
    }

    while (i != pInitialPos) {

        if (i == pGas.length) {
            i = 0
        }
       
        tank = tank - pCost[p] + pGas[i]
       
        if (tank < 0) {
            break
        }

        p = i
        i++
    }

    return tank
}

const gas: number [] = [2,3,4]
const cost: number [] = [3,4,3]
const initial: number = 2

console.log('Gas', gas)
console.log('Cost', cost)
console.log('Total Cost $', calculateGasTotalCost(gas,cost, initial))
const message: string = "Hello World"

// nameFunction(par1: type, par2: type) returnType {}
function add(a: number, b: number): number {
   return a + b;
}

console.log(message)

// Interfaces (como las clases)
interface Account {
    id: string | number
    name: string
    balance: number
    deposit: (amount: number) => void //ArrowFunction
}

type exchange = "dollar" | "colon"


//Arrow Function, con retorno del Interface
const createAccount = (id: number, name: string, balance: number = 0): Account => {
    return {
        id,
        name,
        balance,
        deposit: (amount) => {
            console.log('Deposited amount !!!')
        }
    }
}

const acct1 = createAccount(1, '', 0)
acct1.deposit(9)

// Importar librerías como prompt-sync para captura de datos *** OJO ****
import promptSync from 'prompt-sync';

const prompt = promptSync();
const result = prompt("Message: ");

// Exportar
import { getUserName } from './prompt'

const name = getUserName();

console.log(result, name)
// Una cuenta bancaria

interface Account {
   id: number
   name: string
   balance: number
   deposit: (amount: number) => void
   withdraw: (amount: number) => number | null
   transfer: (toAccount: Account, amount: number) => Account | null
}


// Objeto de manera declarativa
function Account(id: number, name: string, balance: number = 0) {
   this.id = id
   this.name = name
   this.balance = balance

   // Método 1
   this.deposit = (amount: number) => {
     console.log('*** Deposit ', amount)
     this.balance += amount
   }
   
   // Método 2
   this.withdraw = (amount: number) => {
     console.log('*** Withdraw ', amount) 
     if (this.balance < amount) {
        console.log('Insuficient funds.')
        return null
     }
     else {
        this.balance -= amount
        return amount
     }
   }
   
   // Método 3
   this.transfer = (toAccount: Account, amount: number) => {
      const cash = this.withdraw(amount)

      if (cash) {
        toAccount.deposit(cash)
        return toAccount
      }

      return null
   }
   
   return this
}

const acct1 = new (Account as any) (1, 'Niko', 10000)
const acct2 = new (Account as any) (2, 'Josias')

acct1.deposit(1200)
console.log('Balance:', acct1.balance)
acct1.withdraw(4000)
console.log('Balance:', acct1.balance)
acct1.withdraw(8000)
console.log('Balance:', acct1.balance)
acct1.transfer(acct1, 2000)
console.log('Balance 1:', acct1.balance)
console.log('Balance 2:', acct2.balance)
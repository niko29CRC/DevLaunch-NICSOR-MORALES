// Una cuenta bancaria

// Objeto de manera declarativa
function Account(id, name, balance = 0) {
   this.id = id
   this.name = name
   this.balance = balance

   // Método 1
   this.deposit = (amount) => {
     console.log('*** Deposit ', amount)
     this.balance += amount
   }
   
   // Método 2
   this.withdraw = (amount) => {
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
   this.transfer = (toAccount, amount) => {
      const cash = this.withdraw(amount)

      if (cash) {
        toAccount.deposit(cash)
        return toAccount
      }

      return null
   }
   
   return this
}

const acct1 = new Account(1, 'Niko', 10000)
const acct2 = new Account(2, 'Josias')

acct1.deposit(1200)
console.log('Balance:', acct1.balance)
acct1.withdraw(4000)
console.log('Balance:', acct1.balance)
acct1.withdraw(8000)
console.log('Balance:', acct1.balance)
acct1.transfer(acct1, 2000)
console.log('Balance 1:', acct1.balance)
console.log('Balance 2:', acct2.balance)
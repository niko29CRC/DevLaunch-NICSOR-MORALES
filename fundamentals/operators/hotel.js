const prompt = require('prompt-sync')();

const PRICE_PER_DAY = 100
const DISCOUNT = 0.05
const daysNum = parseInt(prompt("How many nights do you like to stay on the hotel? =>"))

const subtotal = PRICE_PER_DAY * daysNum
const discountAmount = subtotal * DISCOUNT
const total = subtotal - discountAmount

console.log(`
    ----------------
    CUSTOMER RECEIPT
    ----------------
     
     Nights: ${daysNum} \n
     Subtotal: $ ${subtotal} 
     Discount: $ ${discountAmount}
     
     Total: $ ${total}
`)

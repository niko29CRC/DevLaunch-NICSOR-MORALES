const prompt = require('prompt-sync')();

const MIN_RECHARGE = 20
const MAX_RECHARGE = 80
const MIN_MONTHS_DURATION = 12
const MIN_MULTIPLIER = 1

const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3

const SUPER_SAVER_PROMO_AMOUNT = 38
const SUPER_SAVER_PROMO_MAX_DURATION = 36
const SUPER_PROMO_MULTIPLIER = 2

function calculateRecharge(amount, duration){
   
    if (duration < MIN_MONTHS_DURATION) return amount
     
    if (amount < MIN_RECHARGE || amount > MAX_RECHARGE) return amount 

    let multiplier = MIN_MULTIPLIER

    if (duration > MEGA_PROMO_MIN_DURATION){
        multiplier = MEGA_PROMO_MULTIPLIER
    } else {
        if ( (amount < SUPER_SAVER_PROMO_AMOUNT && amount >= MIN_RECHARGE) && duration <= SUPER_SAVER_PROMO_MAX_DURATION) {
          multiplier = SUPER_PROMO_MULTIPLIER
        }
    }

    return amount * multiplier
}

function main(){
    const clientName = prompt('Name => ')
    const amount = parseInt(prompt('Amount $ => '))
    const duration = parseInt(prompt('Months Duration => '))

    const recharge = calculateRecharge(amount, duration)
    const promo = recharge - amount 

    console.log(`
       THANKS, ${clientName}   
       
       RECHARGE: $ ${recharge}
       PROMO: $ ${promo} 
    `)
}

main()
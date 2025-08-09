/*
    Voy al supermercado GreenCenter para hacer mis compras habituales y planeo
    comprar manzanas y naranjas
    Cuando estoy allí, veo que no hay plátanos y uvas, así que cambio un poco mi lista.
    Veo que 3 cajeros están trabajando, así que preparo para pagar.
    Mis cosas cuestan $100 en total.
    Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarketName = "GreenCenter"

const shoppingList = "Naranjas, Manzanas, Plátanos, Uvas"
const availableProducts = "Naranjas, Manzanas"

const areBananaAvailable = false
const areGrapesAvailable = false

const availableCashiers = 3

const currencySymbol = "$"
const totalPurchase = 100
const receivedPayment = 150

let   moneybackCustomer = 0
moneybackCustomer = receivedPayment - totalPurchase

console.log(`
     Welcome to : ${supermarketName} \n
     
     List: ${availableProducts} \n
    
     Total Purchase: ${currencySymbol} ${totalPurchase} \n
     Received Payment: ${currencySymbol} ${receivedPayment} \n
     
     MoneyBack: ${moneyback}
`)


const calculateDiscount = (prices: number[], n: number, basedDiscount: number = 0.2) => {
  let subtotal = 0
  let discount = 0
  let batchCount = 0


  prices.sort().forEach(price => {
     batchCount++
     subtotal += price

     const discountTime = batchCount === n

     if(discountTime) {
        discount += subtotal * basedDiscount
        basedDiscount /= 2
        batchCount = 0
     }
  })
  
  const total = subtotal - discount
  return {total, subtotal, discount}
}

console.log('DISCOUNT= ', calculateDiscount([3000, 1000, 2000], 2))
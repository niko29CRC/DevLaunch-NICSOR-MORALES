import promptSync from 'prompt-sync'
const prompt = promptSync()

type Product = 'A' | 'B' | 'C'

interface ProductInfo {
   price: number
   food: string
}

class VendingMachine {
  private validCoins: number[]
  private totalInserted: number
  private productSelected: Product | null
  private products: Record <Product, ProductInfo>

  constructor () {
    this.totalInserted = 0
    this.productSelected = null,
    this.validCoins = [1, 2, 5, 10]
    this.products = {
        A: {price: 14, food: '🍔'},
        B: {price: 10, food: '🍕'},
        C: {price: 8, food: '🌮'},
    }
  }


  private requestProduct = (): Product => {
     let option: string = ''

     const options = Object.keys(this.products) as Product []

     const productList = options.reduce((text, option) => {
        return text + `${option} (${this.products[option].food}) `
     }, '')
     
     while(!options.includes(option as Product)) {
        console.clear()
        option = prompt(`Select a product ${productList}: `)
     }

     return option as Product
  }
  public selectProduct = async () => {
      this.productSelected = this.requestProduct()

      const {price, food} = this.products[this.productSelected]

      while (this.totalInserted < price) {
        console.clear()
        const coin = this.requestCoin(price, food)
        this.totalInserted += coin
      }

      console.clear()
      console.log(`Product: ${food}`)
      console.log(`Change: $${this.totalInserted - price}`)
  }

  private requestCoin = (price: number, food: string) => {
    const coins = this.validCoins.reduce((text, coin) => 
                                          `${text} $${coin} `, ' ')

    console.log(`
        Product: ${food}
        Total: $ ${price}
        Balance: $ ${this.totalInserted}
        `)

    const coin2 = prompt(`Insert coin (${coins}): `)
    
    return parseInt(coin2)
  }
}

const vendingMachine = new VendingMachine()
vendingMachine.selectProduct()
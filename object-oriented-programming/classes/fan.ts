/* EL ABANICO */
type FanSize = 'small' | 'medium' | 'large'
type FanColor = 'white' | 'black' | 'gray'
type FanSpeed = 0 | 1 | 2 | 3

class Fan {
    public type: string
    public speed: FanSpeed
    public size: FanSize
    public color: FanColor

    constructor(type: string,  size: FanSize, color: FanColor) {
        this.type = type
        this.speed = 0
        this.size = size
        this.color = color
    }

    public setType(type: string) {
       this.type = type
    } 

    public getType(): string {
       return this.type
    }

    public setSize(size: FanSize) {
        this.size = size
    } 

    public getSize() : FanSize {
        return this.size
    }

    
    public setColor(color: FanColor) {
        this.color = color
    } 

    public getColor() : FanColor {
        return this.color
    }

    public setSpeed(speed: FanSpeed) {
        this.speed = speed
    } 

    public getSpeed() : FanSpeed {
        return this.speed
    }
   
}

const fan1 = new Fan('Oster', 'small', 'black')

fan1.setType('Samsung')
fan1.setSize('large')
fan1.setColor('gray')
fan1.setSpeed(2)

console.log(fan1.getType())
console.log(fan1.getSize())
console.log(fan1.getColor())
console.log(fan1.getSpeed())
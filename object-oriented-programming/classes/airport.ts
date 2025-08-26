/*EL AEROPUERTO*/


type TrafficLevel = 'low' | 'middle' | 'high'

class Airport {

    private _name : string
    private _location: string
    private _runwayStatus: boolean
    private _trafficLevel: TrafficLevel

    constructor(name: string, location: string) {
        this._name = name
        this._location = location
        this._runwayStatus = true
        this._trafficLevel = 'low'
    }

    get runwayStatus () : boolean {
        return this._runwayStatus
    }

    set runwayStatus(status: boolean) {
        this._runwayStatus = status
    }

    get trafficLevel (): TrafficLevel {
       return this._trafficLevel
    }

    set trafficLevel (level: TrafficLevel) {
       this._trafficLevel = level
    }

    changeTrafficLevel(level: TrafficLevel) : void {
        this.trafficLevel = level
        console.log(`The traffic level was changed to ${level} in the ${this._name} airport`)
    }

    emergencyLanding(): void {
        this.runwayStatus = false
        this.trafficLevel = 'high'
        console.log(`Emergency landing enabled in the ${this._name} airport. The runway is already closed and the traffic level is ${this._trafficLevel} `)

    }

    displayInfo(): void {
       console.log(`Name: ${this._name}`)
       console.log(`Location: ${this._location}`)
       console.log(`Runway Status: ${this.runwayStatus}`)
       console.log(`Traffic Level: ${this.trafficLevel}`)
    }
}

const myAirport = new Airport('Niko Lopez', 'Almuniera de los Cabos')

myAirport.displayInfo()
myAirport.changeTrafficLevel('middle')
myAirport.displayInfo()
myAirport.emergencyLanding()
myAirport.displayInfo()
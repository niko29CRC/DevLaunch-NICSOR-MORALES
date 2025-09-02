type InstrumentType = 'cord' | 'air' | 'percussion'

// Solo es la forma, no puedo instanciarla como New Instrument(...)
abstract class Instrument {
    constructor (public type: InstrumentType) {


    }

    play() {

    }
}

class Guitar extends Instrument {
    constructor (){
        super('cord')
    }

    play() {
       console.log(`🎸 strum, strum strrruum..... `)
    }
}


class Flute extends Instrument {
    constructor () {
        super('air')
    }

    play(){
      console.log(`🪈  tuut tuuuut tuuuut...`)
    }
}

class Drum extends Instrument {
    constructor () {
        super('percussion')
    }

    play(){
      console.log(`🥁 pum pum pum...`)
    }
}

class Artist {
    constructor() {

    }

    playInstrument(instrumentDevice: Instrument) {
        instrumentDevice.play()
    }
}
const guitar1 = new Guitar()
const flute1 =  new Flute()
const drum1 = new Drum()


// Ejemplo de polimorfismo (Múltiples objetos sean tratados como un objeto distinto)
const art1 = new Artist()

art1.playInstrument(guitar1)
art1.playInstrument(flute1)
art1.playInstrument(drum1)
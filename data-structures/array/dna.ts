const dna: string = "gtgggggggggggggggatgccccagaacgcactcagacccatggtt"

const subsequence: string = 'cgtg'

const isSubsequenceInDna = (dna: string, match: string) : boolean => {
    let subsequence = ""

    for(let i = 0; i <= dna.length - match.length; i++) {
       subsequence = dna.slice(i, i + match.length) // extraer la porción de cadena para analizar
       if(subsequence === match) return true
    }

    return false
}

console.log('Result from subsequence ', subsequence, '=', isSubsequenceInDna(dna, subsequence))
type Candidate = 'Alice' | 'Bob' | 'Charlie'

interface Vote{
    id: string
    candidate: Candidate
}

const checkVotes = (votes: Vote[]) => {
    const voteCounting = new Map <Candidate, number>()

    for(let i=0; i<votes.length; i++) {

        if(voteCounting.has(votes[i].candidate)) {
            const candidateVotes = voteCounting.get(votes[i].candidate) || 0
            voteCounting.set(votes[i].candidate, candidateVotes + 1) 
        } else {
            voteCounting.set(votes[i].candidate, 1)
        }
    }
  
    let maxVotes: number = 0
    let winner: string = ' '

    for(const [candidate, count] of voteCounting.entries()) {
        
        if (count > maxVotes) {
            maxVotes = count
            winner = candidate
        }
    }

    return {candidate: winner,
            votes: maxVotes
    }
}

const votes: Vote[] = [
   {id: '283940340', candidate: 'Alice'},
   {id: '372004735', candidate: 'Charlie'},
   {id: '100238949', candidate: 'Charlie'},
   {id: '937390212', candidate: 'Bob'},
   {id: '100283823', candidate: 'Alice'},
   {id: '700283936', candidate: 'Bob'},
   {id: '382084323', candidate: 'Charlie'},
   {id: '100000231', candidate: 'Alice'},
   {id: '528332334', candidate: 'Charlie'}
]

console.log('Winner is: ', checkVotes(votes))
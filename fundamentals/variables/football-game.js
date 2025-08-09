/* 
    El evento es parte de las eliminatorias sudamericanas para la Copa del mundo.
    Es un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina
    se enfrentó al equipo visitante Brasil. El resultado final fue 1-0,
    indicando a Argentina como el equipo ganador. 
*/

const eventName = "Eliminatorias Sudamericanas"

const day = 22
const month = 11
const year = 2023

const hour = 20
const minute = 30

const time = `${hour}:${minute}`
const date =`${day}/${month}/${year}`

const localTeam = "Argentina"
const awayTeam = "Brasil"

const localTeamScore = 1
const awayTeamScore = 0
const finalScore = `${localTeamScore}-${awayTeamScore}`

console.log(eventName)
console.log("Date:", date)
console.log("Hour:", time)
console.log("Teams:", localTeam, "vs", awayTeam)
console.log("Final Score:", finalScore)
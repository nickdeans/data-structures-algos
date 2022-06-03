//   There's an algorithms tournament taking place in which teams of programmers
//   compete against each other to solve algorithmic problems as fast as possible.
//   Teams compete in a round robin, where each team faces off against all other
//   teams. Only two teams compete against each other at a time, and for each
//   competition, one team is designated the home team, while the other team is the
//   away team. In each competition there's always one winner and one loser; there
//   are no ties. A team receives 3 points if it wins and 0 points if it loses. The
//   winner of the tournament is the team that receives the most amount of points.

// Look at AlgoExpert for rest of question... too long to type

const tournamentWinner = (competitions, results) => {
    let winner = '';
      let map = {};
      let resultsIdx = 0;
      let count = 0;
      
      for(let i = 0; i < competitions.length; i++) {
          if(results[resultsIdx] === 1) {
              if(!map[competitions[i][0]]) {
                  map[competitions[i][0]] = 0
              }
              map[competitions[i][0]]++
              resultsIdx++
                  if(map[competitions[i][0]] > count) {
                      winner = competitions[i][0]
                      count = map[competitions[i][0]]
                  }
          } else {
              if(!map[competitions[i][1]]) {
                  map[competitions[i][1]] = 0;
              }
              map[competitions[i][1]]++
              resultsIdx++
                      if(map[competitions[i][1]] > count) {
                      winner = competitions[i][1]
                      count = map[competitions[i][1]]
                  }
          }
      }
      
      return winner;
  }

const tournamentWinner = (competitions, results) => {
  let winner = '';
  let map = {};
  let idx = 0;
  let mostPoints = 0;

  for(let i = 0; i < competitions.length; i++) {
    if(!map[competitions[i][0]]) {
      map[competitions[i][0]] = 0
    } 
    if(!map[competitions[i][1]]) {
      map[competitions[i][1]] = 0
    }

    if(results[idx] === 0) {
      map[competitions[i][1]]++
    } else {
      map[competitions[i][0]]++
    }
    idx++
  }

  for(let [key, value] of Object.entries(map)) {
    if(value > mostPoints) {
      winner = key;
      mostPoints = value;
    }
  }
  return winner;
}
  
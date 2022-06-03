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
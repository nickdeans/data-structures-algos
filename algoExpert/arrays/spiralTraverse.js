// Write a function that takes in an n x m two-dimensional array (that can be
// square-shaped when n == m) and returns a one-dimensional array of all the
// array's elements in spiral order.
//  Spiral order starts at the top left corner of the two-dimensional array, goes
// to the right, and proceeds in a spiral pattern all the way until every element
// has been visited.

const spiralTraverse = (array) => {
	const spiralArray = [];
	let startRow = 0, endRow = array.length - 1;
	let startCol = 0, endCol = array[0].length - 1;
	
	while(startRow <= endRow && startCol <= endCol) {
		for(let col = startCol; col <= endCol; col++) {
			spiralArray.push(array[startRow][col]);
		}
		
		for(let row = startRow + 1; row <= endRow; row++) {
			spiralArray.push(array[row][endCol]);
		}
		
		for(let col = endCol - 1; col >= startCol; col--) {
			if(startRow === endRow) break;
			spiralArray.push(array[endRow][col]);
		}
		
		for(let row = endRow - 1; row > startRow; row--) {
			if(startCol === endCol) break;
			spiralArray.push(array[row][startCol]);
		}
		
		startRow++;
		endRow--;
		startCol++;
		endRow--;
	}
	return spiralArray;
}
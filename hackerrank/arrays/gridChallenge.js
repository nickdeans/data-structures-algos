// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

const gridChallenge = (grid) => {
    // Write your code here

    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort();
    }

    for (let j = 0; j < grid.length; j++) {
        for (let rowIndex = 0; rowIndex < grid.length - 1; rowIndex++) {

            if (grid[rowIndex][j] > grid[rowIndex + 1][j]) {
                return 'NO'
            }
        }
    }

    return 'YES'
}
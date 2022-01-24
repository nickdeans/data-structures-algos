// Given a square matrix, calculate the absolute difference between the sums of its diagonals.


const diagonalDifference = (arr) => {
    // Write your code here
    let leftDiag = 0;
    let rightDiag = 0;
    
    for(let i = 0; i < arr.length; i++) {
        leftDiag += arr[i][i];
        rightDiag += arr[i][arr.length - i - 1]
    }
    let result = Math.abs(leftDiag - rightDiag);
    return result;
}
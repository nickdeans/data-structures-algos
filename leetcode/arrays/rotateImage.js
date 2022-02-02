// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

const rotate = (matrix) =>{
 
    let n = matrix.length //this is optional 
    
    //[1,2,3],>>>>    [1,4,7]
    //[4,5,6],>>>>    [2,5,8]
    //[7,8,9]>>>>     [3,6,9]
    //rows become columns and columns become rows  Look at above ^^ 
    for(let i = 0; i<n; i++){
        for(let j = i; j< n; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix [j][i] = temp
        }
    }
    
    //[1,4,7],>>>>    [7,4,1]
    //[2,5,8],>>>>    [8,5,2]
    //[3,6,9]>>>>     [9,6,2]
    //swap first and last ele from each row in this case; we swap 1 and 7 and it becomes 7 and 1 Look Above ^^
    for(let i = 0; i< n; i++){
       for(let j = 0; j<(n/2); j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-1-j]
            matrix[i][n-1-j] = temp 
    }
}
};


// //for the second part you can use the reverse method instead of another j loop. 
// //instead of 
//  for(let i = 0; i< n; i++){
//      for(let j = 0; j<(n/2); j++){ // we divide by 2 to get the middle of the array
//            let temp = matrix[i][j]
// 			 matrix[i][j] = matrix[i][n-1-j]
// 		     matrix[i][n-1-j] = temp 
//         }
//     }

// //you can do this:
// for(let i = 0; i< n; i++){
//      matrix[i].reverse() 
// } 
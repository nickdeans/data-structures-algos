// You're given an array of integers and an integer. Write a function that moves
// all instances of that integer in the array to the end of the array and returns
// the array.
// The function should perform this in place (i.e., it should mutate the input
// array) and doesn't need to maintain the order of the other integers.

const moveElementToEnd = (array, toMove) => {
    let newArray = 0;
	
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== toMove) {
            array[newArray] = array[i];
            if(i !== newArray) {
                array[i] = toMove
            }
            newArray++
        }
    }
    return array;
}
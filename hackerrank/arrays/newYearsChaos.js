// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
// Each person wears a sticker indicating their initial position in the queue from 1 to n. 
// Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
// One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. 
// Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

const minimumBribes = (q) => {
    // Write your code here
    // create counter
    // loop over array 
    // create two pointers of present index and next index
    // compare values at each index
    // continue if present < future 
    // if present < 1 || 2 && present > 0 then add difference to counter
    // return too chaotic if > 2
    
    let counter = 0;
    
    for(let i = 0; i < q.length; i++) {
        let present = q[i];
        let next = q[i + 1];
        
        if(present < next) {
            continue
        } else if(present > next) {
            let result = present - next;
            if(result < 3) {
                counter += result;
            } else {
                return console.log('Too chaotic');
            }
        }
    }
    
    console.log(counter);
    
}

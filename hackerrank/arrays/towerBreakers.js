// Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
// The rules of the game are as follows:
// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, where 1<=y<x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

const towerBreakers = (n, m) => {
    // if the towers are all height 1, 2 will win because 1 does not have a move
    if(m === 1) {
        return 2
    }
    // if there is an even number of towers, 2 will always win
    if(n % 2 === 0) {
        return 2
    } else {
        return 1
    }    
}

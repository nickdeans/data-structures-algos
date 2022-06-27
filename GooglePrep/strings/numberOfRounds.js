// You are participating in an online chess tournament. There is a chess round that starts every 15 minutes. The first round of the day starts at 00:00, and after every 15 minutes, a new round starts.

// For example, the second round starts at 00:15, the fourth round starts at 00:45, and the seventh round starts at 01:30.
// You are given two strings loginTime and logoutTime where:

// loginTime is the time you will login to the game, and
// logoutTime is the time you will logout from the game.
// If logoutTime is earlier than loginTime, this means you have played from loginTime to midnight and from midnight to logoutTime.

// Return the number of full chess rounds you have played in the tournament.

const numberOfRounds = (loginTime, logoutTime) => {
    let count = 0;
    let start = -Infinity;
    let sum = 0;
    let firstHour = parseInt(loginTime.substring(0,2));
    let firstMin = parseInt(loginTime.substring(3));
    let endHour = parseInt(logoutTime.substring(0,2));
    let endMin = parseInt(logoutTime.substring(3));

    if (endHour < firstHour || (endHour === firstHour && endMin < firstMin)) {
        sum = 24 * 60;
    }

    let firstMins = firstHour * 60 + firstMin;
    let endMins = endHour * 60 + endMin + sum;

    for (let i = firstMins; i <= endMins; i++) {
        if (i % 15 === 0) {
            if (start < 0) {
                start = 1;
            } else {
                count++
            }
        }
    }
    return count;
};

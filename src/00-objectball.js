function gameObject() {
    let newObj = {
        home: {
            teamName: "Manchester United",
            colors: ["Black", "Black, White"],
            players: {
                rasmusHojlund: {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                amadDiallo: {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7

                },
                brookLopez: {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15

                },
                noussirMazroui: {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
                jasonTerry: {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                },
            },

        },
        away: {
            teamName: "Arsenal",
            colors: ["Turquoise", "Purple"],
            players: {
                jeffAdrien: {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2

                },

                bismakBiyombo: {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                deSagnaDiop: {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5

                },
                benGordon: {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0

                },
                brendanHaywood: {
                    number: 33,
                    shoe: 15,
                    points: 5,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12

                },

            },


        },


    }
    return newObj;
}
console.log(gameObject());


/*Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.*/

function numPointsScored(playerName) {
    const game = gameObject(); // Access the game object

    // Iterate over both 'home' and 'away' teams
    for (let team in game) {
        const players = game[team].players; // Access the players object

        // Check if the player's name exists in the current team
        for (let key in players) {
            if (key === playerName) {
                return players[key].points; // Return points for the matching player
            }
        }
    }

    return `Player not found`; // If the player name does not exist in either team
}

// Example Usage:
console.log(numPointsScored("alanAnderson")); // Should output 22
console.log(numPointsScored("jeffAdrien")); // Should output 10
console.log(numPointsScored("unknownPlayer")); // Should output "Player not found"



/*Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
Think about how you will find the shoe size of the correct player. 
How can you check and see if a player's name matches the name that has been passed into the function as an argument?*/


function shoesize(playerName2){
    const game2= gameObject();
    
    for (let i in game2){
        const players= game2[i].players;

        for (let key in players){
            if (key=== playerName2){
                return players[key].shoe;
            }
        }
        
    }
    return "Input the correct player"

}

console.log(shoesize("alanAnderson")); 
console.log(shoesize("jeffAdrien")); 
console.log(shoesize("wuodaperi"));



/*Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.*/

function teamColors(name){
    const game3= gameObject();
    
    for (let j in game3){
        const teamData= game3[j];
        if (teamData.teamName === name) {
            return teamData.colors; // Return colors if the team matches
        }
        
    }
    return "Input the correct team name"


}
console.log(teamColors("Manchester United")); 
console.log(teamColors("Arsenal")); 
console.log(teamColors("ombiju"));


/*Build a function, teamNames, that operates on the game object to return an array of the team names.*/

function teamNames(){
    const game4= gameObject();
    
    const names = []; // Initialize an empty array to store team names

    for (let team in game4) {
        names.push(game4[team].teamName); // Add each team's name to the array
    }

    return names;
}

console.log(teamNames()); 



/*Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
*/

function playerNumbers(name){

    const game= gameObject();
    
    
    for (let team in game) {
        const teamData = game[team]; // Access each team's data

        if (teamData.teamName === name) {
            const numbers = [];
            for (let player in teamData.players) {
                numbers.push(teamData.players[player].number); // Add player numbers to the array
            }
            return numbers; // Return the array of jersey numbers
        }
    }
    return "Input the correct team name"

}

console.log(playerNumbers("Manchester United")); 
console.log(playerNumbers("Arsenal")); 
console.log(playerNumbers("ombiju"));

/*Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
 Check out the following example of the expected return value of the playerStats function:
*/


function playerStats(playerName) {
    const game = gameObject(); // Get the game object

    for (let team in game) {
        const players = game[team].players; // Access the players object for the current team

        if (playerName in players) {
            return players[playerName]; // Return the stats for the matching player
        }
    }

    return "Player not found"; // Return an error message if the player is not found
}


console.log(playerStats("rasmusHojlund"));

console.log(playerStats("amadDiallo"));

console.log(playerStats("noussirMazroui")); // Output: "Player not found"



/*Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
First, find the player with the largest shoe size
Then, return that player's number of rebounds
Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
*/

function bigShoeRebounds() {
    const game = gameObject(); // Get the game object
    let largestShoeSize = 0; // Initialize variable to store largest shoe size
    let rebounds = 0; // Initialize variable to store rebounds of the player with the largest shoe size

    for (let team in game) {
        const players = game[team].players; // Access players for the current team

        for (let player in players) {
            const playerData = players[player]; // Get stats for the current player

            if (playerData.shoe > largestShoeSize) {
                largestShoeSize = playerData.shoe; // Update largest shoe size
                rebounds = playerData.rebounds; // Update rebounds for the player with the largest shoe size
            }
        }
    }

    return rebounds; // Return the number of rebounds
}


console.log(bigShoeRebounds()); 



/*Define functions to return the answer to the following questions:

Which player has the most points? Call the function mostPointsScored.
Which team has the most points? Call the function winningTeam.
Which player has the longest name? Call the function playerWithLongestName.
Super Bonus
Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.*/




// 1. Function to find the player with the most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";

    for (let team in game) {
        const players = game[team].players;

        for (let player in players) {
            if (players[player].points > maxPoints) {
                maxPoints = players[player].points;
                topPlayer = player;
            }
        }
    }

    return topPlayer;
}

// 2. Function to find the team with the most points
function winningTeam() {
    const game = gameObject();
    let teamPoints = { home: 0, away: 0 };

    for (let team in game) {
        const players = game[team].players;

        for (let player in players) {
            teamPoints[team] += players[player].points;
        }
    }

    return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName;
}

// 3. Function to find the player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let team in game) {
        const players = game[team].players;

        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

// 4. Super Bonus: Does the player with the longest name have the most steals?
function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;

    for (let team in game) {
        const players = game[team].players;

        for (let player in players) {
            if (players[player].steals > maxSteals) {
                maxSteals = players[player].steals;
            }
        }
    }

    return game.home.players[longestName]?.steals === maxSteals ||
           game.away.players[longestName]?.steals === maxSteals;
}

// Example usage
console.log("Player with most points:", mostPointsScored()); 
console.log("Winning team:", winningTeam()); // Output: Manchester United
console.log("Player with longest name:", playerWithLongestName()); // Output: Cristiano Ronaldo
console.log("Does longest name steal a ton?:", doesLongNameStealATon()); // Output: true or false
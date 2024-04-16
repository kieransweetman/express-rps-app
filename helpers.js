
const MOVE_IDS = {
    rock: 0,
    paper: 1,
    scissors: 2
}

const MOVES = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

const scoreboard = {
    win: 0,
    lose: 0,
    tie: 0
}


/**
 * 
 * @param {string} playerMove lower case name of move
 * @returns move id's of player and server (in that order)
 */
const getMove = (playerMove) => {

    const serverAction = Math.floor(Math.random() * 3);

    const move = MOVE_IDS[playerMove];
    const serverMove = MOVE_IDS[MOVES[serverAction]];


    return { move, serverMove };

}

const playGame = (playerMove, cpuMove) => {

    if (playerMove === cpuMove) {
        scoreboard.tie++;
        return 'Draw';
    }

    if ((playerMove === MOVE_IDS.rock && cpuMove === MOVE_IDS.scissors) ||
        (playerMove === MOVE_IDS.paper && cpuMove === MOVE_IDS.rock) ||
        (playerMove === MOVE_IDS.scissors && cpuMove === MOVE_IDS.paper)) {

        scoreboard.win++;
        return 'Player wins';
    }

    scoreboard.lose++;
    return 'CPU wins';


}

module.exports = { getMove, playGame, MOVES, scoreboard };
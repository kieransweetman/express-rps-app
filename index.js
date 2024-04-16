const express = require('express');
const app = express();
const cors = require('cors');
const { getMove, playGame, MOVES, scoreboard } = require('./helpers');
const port = 3000;

// ---

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.send("go to /game/play/(rock | paper | scissors) to play versus the server");
})

app.get('/game/play/:move', (req, res) => {

    const { move, serverMove } = getMove(req.params.move.toLowerCase());

    const result = playGame(move, serverMove);

    res.send(`You played ${MOVES[move]} and the server played ${MOVES[serverMove]}. ${result}`)

})

app.get('/game/score', (req, res) => {
    res.send(scoreboard);
});



app.put('/game/score/:win/:lose/:tie', (req, res) => {
    const { win, lose, tie } = req.params;

    return new Promise((res, rej) => {
        scoreboard.win = win;
        scoreboard.lose = lose;
        scoreboard.tie = tie;
        res(scoreboard)

    }).then((score) => res.send(score));

});


app.post('/game/reset', (req, res) => {

    return new Promise((res, rej) => {
        scoreboard.win = 0;
        scoreboard.lose = 0;
        scoreboard.tie = 0;
        res(scoreboard);
    }).then((score) => res.send(score));


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
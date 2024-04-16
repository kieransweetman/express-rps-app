# Rock, Paper, Scissors

A simple rps game played with the server, using Math.random

## Setup 

Use your favorite packet manager and install the dependencies:

```pnpm i```

## How to play

To interact with the game, you can hit the following routes:

- `/game/play/:move` - You can choose between the 3 moves, by replacing the keyword `:move`

- `/game/score` - get the current score vs the server

- `game/reset` - reset the score 

- `game/score/:win/:lost/:tie` - If you feel like the computer is cheating (justified) go head and just change your score, it's not like the computer can say anything about it.


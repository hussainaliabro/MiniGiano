function startGame(game) {
    if (game === 'snake') {
        window.location.href = 'snake.html'; // Redirect to Snake game
    } else if (game === 'tictactoe') {
        window.location.href = 'tictactoe.html'; // Redirect to Tic Tac Toe game
    }
    else if (game === 'pong') {
        window.location.href = 'pong.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let board = Array(9).fill('');
    let gameActive = true;

    function checkWinner() {
        const winPatterns = [
            [0,1,2],[3,4,5],[6,7,8], // rows
            [0,3,6],[1,4,7],[2,5,8], // columns
            [0,4,8],[2,4,6]          // diagonals
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes('') ? null : 'draw';
    }

    function handleClick(e) {
        const idx = Array.from(cells).indexOf(e.target);
        if (!gameActive || board[idx]) return;
        board[idx] = currentPlayer;
        e.target.textContent = currentPlayer;
        const result = checkWinner();
        if (result) {
            gameActive = false;
            setTimeout(() => {
                alert(result === 'draw' ? "Heç-heçə!" : `${result} qalib oldu!`);
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    cells.forEach(cell => cell.addEventListener('click', handleClick));
});
function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(
        row: number,
        col: number,
        index: number
    ): boolean {

        // Word completed
        if (index === word.length) {
            return true;
        }

        // Boundary check
        if (
            row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols
        ) {
            return false;
        }

        // Character mismatch
        if (board[row][col] !== word[index]) {
            return false;
        }


        // Mark visited
        const temp = board[row][col];
        board[row][col] = "#";


        // Explore 4 directions
        const found =
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1);


        // Undo choice (backtrack)
        board[row][col] = temp;


        return found;
    }


    // Try every starting cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (backtrack(r, c, 0)) {
                return true;
            }
        }
    }


    return false;
};